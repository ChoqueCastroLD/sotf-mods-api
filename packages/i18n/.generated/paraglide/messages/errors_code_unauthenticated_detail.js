/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unauthenticated_DetailInputs */

const en_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session ended or you haven’t signed in yet. Sign in and we’ll bring you back here.`)
};

const es_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu sesión terminó o aún no has iniciado sesión. Inicia sesión y te traemos de vuelta aquí.`)
};

const de_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Sitzung ist abgelaufen oder du bist noch nicht angemeldet. Melde dich an, dann bringen wir dich hierher zurück.`)
};

const fr_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre session a expiré ou vous n’êtes pas encore connecté. Connectez-vous et nous vous ramènerons ici.`)
};

const it_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua sessione è scaduta o non hai ancora effettuato l’accesso. Accedi e ti riportiamo qui.`)
};

const nl_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je sessie is verlopen of je bent nog niet ingelogd. Log in en we brengen je hier terug.`)
};

const pl_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja sesja wygasła albo nie jesteś jeszcze zalogowany. Zaloguj się, a wrócimy tutaj.`)
};

const pt_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua sessão expirou ou você ainda não entrou. Entre e traremos você de volta para cá.`)
};

const ru_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сессия истекла или вы ещё не вошли. Войдите, и мы вернём вас сюда.`)
};

const sv_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din session har gått ut eller så har du inte loggat in än. Logga in så tar vi dig tillbaka hit.`)
};

const tr_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumun sona erdi ya da henüz giriş yapmadın. Giriş yap, seni buraya geri getirelim.`)
};

const zh_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的会话已过期，或尚未登录。登录后我们会带你回到这里。`)
};

const ja_errors_code_unauthenticated_detail = /** @type {(inputs: Errors_Code_Unauthenticated_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションの有効期限が切れたか、まだログインしていません。ログインすると、このページに戻ります。`)
};

/**
* | output |
* | --- |
* | "Your session ended or you haven’t signed in yet. Sign in and we’ll bring you back here." |
*
* @param {Errors_Code_Unauthenticated_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unauthenticated_detail = /** @type {((inputs?: Errors_Code_Unauthenticated_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unauthenticated_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unauthenticated_detail(inputs)
	if (locale === "de") return de_errors_code_unauthenticated_detail(inputs)
	if (locale === "fr") return fr_errors_code_unauthenticated_detail(inputs)
	if (locale === "it") return it_errors_code_unauthenticated_detail(inputs)
	if (locale === "nl") return nl_errors_code_unauthenticated_detail(inputs)
	if (locale === "pl") return pl_errors_code_unauthenticated_detail(inputs)
	if (locale === "pt") return pt_errors_code_unauthenticated_detail(inputs)
	if (locale === "ru") return ru_errors_code_unauthenticated_detail(inputs)
	if (locale === "sv") return sv_errors_code_unauthenticated_detail(inputs)
	if (locale === "tr") return tr_errors_code_unauthenticated_detail(inputs)
	if (locale === "zh") return zh_errors_code_unauthenticated_detail(inputs)
	if (locale === "ja") return ja_errors_code_unauthenticated_detail(inputs)
	return en_errors_code_unauthenticated_detail(inputs)
});
