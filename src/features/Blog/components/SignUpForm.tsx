import React, { useEffect, useState } from "react";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (updatedValues = formValues) => {
    const newErrors = {};

    // 사용자 이름 검증
    if (!updatedValues.username.trim()) {
      newErrors.username = "사용자 이름을 입력하세요.";
    } else if (
      updatedValues.username.length < 2 ||
      updatedValues.username.length > 16
    ) {
      newErrors.username = "사용자 이름은 2자에서 16자 사이여야 합니다.";
    }

    // 이메일 검증
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!updatedValues.email.trim()) {
      newErrors.email = "이메일 주소를 입력하세요.";
    } else if (!emailRegex.test(updatedValues.email)) {
      newErrors.email = "유효한 이메일 주소를 입력하세요.";
    }

    // 비밀번호 검증
    if (!updatedValues.password) {
      newErrors.password = "비밀번호를 입력하세요.";
    } else if (
      updatedValues.password.length < 8 ||
      updatedValues.password.length > 20
    ) {
      newErrors.password = "비밀번호는 8자에서 20자 사이여야 합니다.";
    } else if (
      !/[A-Z]/.test(updatedValues.password) ||
      !/[a-z]/.test(updatedValues.password) ||
      !/[0-9]/.test(updatedValues.password) ||
      !/[!@#$%^&*]/.test(updatedValues.password)
    ) {
      newErrors.password =
        "비밀번호에는 대문자, 소문자, 숫자, 특수문자가 포함되어야 합니다.";
    }

    // 비밀번호 확인 검증
    if (!updatedValues.confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인을 입력하세요.";
    } else if (updatedValues.password !== updatedValues.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { id, value } = e.target;
    console.log({ id, value });
    const updatedValues = { ...formValues, [id]: value };
    setFormValues(updatedValues);
    if (isSubmitted) {
      validate(updatedValues);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validate()) {
      console.log(`validate(): , ${validate()}`);
      alert("회원가입이 완료되었습니다!");
    }
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          계정을 생성하세요
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              value={formValues.username}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="사용자 이름을 입력하세요"
              required
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="이메일 주소를 입력하세요"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="비밀번호를 입력하세요"
              required
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            회원가입
          </button>
        </form>

        {/* <div className="text-center mt-4">
          <p className="text-sm text-gray-600">또는</p>
          <button className="mt-2 w-full px-4 py-2 text-white bg-rose-500 rounded-lg hover:bg-rose-600 focus:ring-4 focus:ring-red-300 focus:outline-none flex items-center justify-center">
            Google로 회원가입
          </button>
        </div> */}
        <p className="text-sm text-center text-gray-600">
          이미 계정이 있으신가요?
          <a href="#" className="text-blue-500 hover:underline p-2">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
