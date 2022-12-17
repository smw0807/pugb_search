/**
 * https://element-plus.org/en-US/component/notification.html
 *
 * ## HTML 태그 사용할 수 있는 옵션
 * dangerouslyUseHTMLString: true
 * 알림 메시지 관련 함수들
 */
import { ElNotification } from 'element-plus';

// 닉네임 검색 후 404 코드 받았을 때
export const player404 = (): void => {
  ElNotification({
    title: '존재하지 않는 플레이어 닉네임입니다.',
    message: '플랫폼 또는 닉네임 대소문자를 확인해주시기 바랍니다.',
    type: 'info',
  });
};

// 분당 요청 수 초과시
export const _429 = (): void => {
  ElNotification({
    title: '요청수가 너무 많습니다.',
    message: '잠시후에 다시 검색해주시기 바랍니다.',
    type: 'warning',
  });
};

// 성공 알림
export const notifSuccess = (title: string, msg: string): void => {
  ElNotification({
    title: title,
    message: msg,
    type: 'success',
    dangerouslyUseHTMLString: true,
  });
};

// 경고 알림
export const notifWarning = (title: string, msg: string): void => {
  ElNotification({
    title: title,
    message: msg,
    type: 'warning',
    dangerouslyUseHTMLString: true,
  });
};

// 정보 알림
export const notifInfo = (title: string, msg: string): void => {
  ElNotification({
    title: title,
    message: msg,
    type: 'info',
    dangerouslyUseHTMLString: true,
  });
};

// 에러 알림
export const notifError = (title: string, msg: string): void => {
  ElNotification({
    title: title,
    message: msg,
    type: 'error',
    dangerouslyUseHTMLString: true,
  });
};
