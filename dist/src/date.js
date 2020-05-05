"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dateFns = __importStar(require("date-fns"));
exports.parser = function () {
    var date = new Date();
    var yoIl = dateFns.format(date, "e");
    var today = dateFns.format(date, "M월 d일");
    return {
        note: yoIl === "2"
            ? " \uC0C8\uB85C\uC6B4 \uD55C\uC8FC\uAC00 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4 \uD83D\uDC36\n          \uC8FC\uB9D0\uAE4C\uC9C0 \uD55C\uCC38 \uB0A8\uC558\uB2E4\uB294 \uC0DD\uAC01\uC5D0 \uC81C\uBC95 \uC9C0\uCE58\uB294 \uC6D4\uC694\uC77C\uC774\uC9C0\uB9CC, \n          \uD479 \uC270 \uC8FC\uB9D0 \uB355\uC5D0 \uBAB8\uC774 \uD55C\uACB0 \uAC00\uBCCD\uC2B5\uB2C8\uB2E4.\n          \uAC00\uBCBC\uC6B4 \uBAB8\uC73C\uB85C \uAE30\uBD84\uC88B\uC740 \uD55C\uC8FC\uB97C \uC2DC\uC791\uD574 \uBCF4\uC138\uC694 ^^7"
            : yoIl === "3"
                ? "\n        \uBC14\uC05C \uC6D4\uC694\uC77C\uC774 \uC9C0\uB098\uACE0 \uC81C\uBC95 \uC5EC\uC720\uB85C\uC6CC\uC9C4 \uD654\uC694\uC77C\uC785\uB2C8\uB2E4. \uD83D\uDC31\n        \uC544\uCE68\uC5D0 \uC2DC\uC6D0\uD55C \uCEE4\uD53C \uD55C\uC794\uACFC \uD568\uAED8 \uC5EC\uC720\uB97C \uC990\uACA8\uBCF4\uC138\uC694~!!\n        "
                : yoIl === "4"
                    ? "\n          \uB0A8\uC740 \uD55C\uC8FC\uAC00 \uC218~\uC6B8\uC220 \uD480\uB9B4 \uAC83 \uAC19\uC740 \uAE30\uBD84 \uC88B\uC740 \uC218\uC694\uC77C\uC785\uB2C8\uB2E4 \uD83D\uDC2D\n          \uD55C\uC8FC\uAC00 \uBC8C\uC368 \uC808\uBC18\uC774\uB098 \uC9C0\uB0AC\uB124\uC694.\n          \uB0A0\uC528\uAC00 \uB354 \uCD94\uC6CC\uC9C0\uAE30 \uC804\uC5D0 \uC8FC\uB9D0 \uB098\uB4E4\uC774 \uACC4\uD68D\uC744 \uC138\uC6CC\uBCF4\uB294 \uAC83\uC740 \uC5B4\uB5A8\uAE4C\uC694?\n          \uC544\uB9C8 \uB0A8\uC740 \uD55C\uC8FC\uAC00 \uAE08\uBC29 \uC9C0\uB098\uAC08 \uAC83\uC785\uB2C8\uB2E4^^\n        "
                    : yoIl === "5"
                        ? "\n          \uD55C \uC8FC \uB3D9\uC548 \uD558\uB8E8\uAC00 \uAC00\uC7A5 \uAE38\uAC8C \uB290\uAEF4\uC9C4\uB2E4\uB294 \uBAA9\uC694\uC77C\uC785\uB2C8\uB2E4. \uD83E\uDD8A\n          \uD558\uB8E8\uAC00 \uAE38\uAC8C \uB290\uAEF4\uC9C0\uB294 \uB9CC\uD07C,\n          \uC7A0\uC2DC \uBC16\uC5D0\uC11C \uC0C1\uCF8C\uD55C \uACF5\uAE30\uB97C \uB9C8\uC2DC\uBA70 \uAE30\uBD84\uC804\uD658\uC744 \uD574 \uBCF4\uB294\uAC83\uB3C4 \uC88B\uACA0\uC2B5\uB2C8\uB2E4.\n          \uD654\uC774\uD305 \uD558\uC138\uC694 ^^*\n        "
                        : yoIl === "6"
                            ? "\n        \uC8FC\uB9D0\uC744 \uC55E\uB454 \uAE08\uC694\uC77C\uC785\uB2C8\uB2E4 \uD83D\uDC25\n        \uB2A6\uAC00\uC744 \uBC14\uB78C\uC774 \uC81C\uBC95 \uCC28\uAC11\uC9C0\uB9CC\n        \uC9C0\uC778\uB4E4\uC744 \uB9CC\uB098 \uB530\uB73B\uD55C \uC628\uAE30\uB97C \uB098\uB220\uBCF4\uB294 \uAC83\uC740 \uC5B4\uB5A8\uAE4C\uC694?\n        \uC8FC\uAC04\uBCF4\uACE0 \uAE4C\uBA39\uC9C0 \uB9C8\uC2DC\uACE0 \uD83D\uDE19 \uC990\uAC70\uC6B4 \uC8FC\uB9D0 \uB418\uC138\uC694 ^^\n        "
                            : "",
        date: today +
            (yoIl === "2"
                ? " 월요일"
                : yoIl === "3"
                    ? " 화요일"
                    : yoIl === "4"
                        ? " 수요일"
                        : yoIl === "5"
                            ? " 목요일"
                            : yoIl === "6"
                                ? " 금요일"
                                : yoIl === "7"
                                    ? " 토요일"
                                    : yoIl === "1"
                                        ? " 일요일"
                                        : ""),
    };
};
//# sourceMappingURL=date.js.map