/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_NoscriptInputs */

const en_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logging in needs JavaScript. Turn it on for this site and reload the page.`)
};

const es_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para iniciar sesión hace falta JavaScript. Actívalo para este sitio y recarga la página.`)
};

const de_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für die Anmeldung wird JavaScript benötigt. Aktiviere es für diese Seite und lade sie neu.`)
};

const fr_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La connexion nécessite JavaScript. Activez-le pour ce site et rechargez la page.`)
};

const it_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per accedere serve JavaScript. Attivalo per questo sito e ricarica la pagina.`)
};

const nl_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor inloggen is JavaScript nodig. Zet het aan voor deze site en laad de pagina opnieuw.`)
};

const pl_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logowanie wymaga JavaScriptu. Włącz go dla tej strony i odśwież ją.`)
};

const pt_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para entrar é preciso JavaScript. Ative-o para este site e recarregue a página.`)
};

const ru_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для входа нужен JavaScript. Включите его для этого сайта и обновите страницу.`)
};

const sv_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggningen kräver JavaScript. Aktivera det för den här webbplatsen och ladda om sidan.`)
};

const tr_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş için JavaScript gerekiyor. Bu site için etkinleştirip sayfayı yenile.`)
};

const zh_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录需要 JavaScript。请为本站启用后刷新页面。`)
};

const ja_auth_noscript = /** @type {(inputs: Auth_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインには JavaScript が必要です。このサイトで有効にしてから、ページを再読み込みしてください。`)
};

/**
* | output |
* | --- |
* | "Logging in needs JavaScript. Turn it on for this site and reload the page." |
*
* @param {Auth_NoscriptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_noscript = /** @type {((inputs?: Auth_NoscriptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_NoscriptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_noscript(inputs)
	if (locale === "de") return de_auth_noscript(inputs)
	if (locale === "fr") return fr_auth_noscript(inputs)
	if (locale === "it") return it_auth_noscript(inputs)
	if (locale === "nl") return nl_auth_noscript(inputs)
	if (locale === "pl") return pl_auth_noscript(inputs)
	if (locale === "pt") return pt_auth_noscript(inputs)
	if (locale === "ru") return ru_auth_noscript(inputs)
	if (locale === "sv") return sv_auth_noscript(inputs)
	if (locale === "tr") return tr_auth_noscript(inputs)
	if (locale === "zh") return zh_auth_noscript(inputs)
	if (locale === "ja") return ja_auth_noscript(inputs)
	return en_auth_noscript(inputs)
});
