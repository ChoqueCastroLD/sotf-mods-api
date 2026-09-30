/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Link_FallbackInputs */

const en_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If the button doesn’t work, copy this link into your browser:`)
};

const es_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si el botón no funciona, copia este enlace en tu navegador:`)
};

const de_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:`)
};

const fr_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :`)
};

const it_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se il pulsante non funziona, copia questo link nel browser:`)
};

const nl_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt de knop niet? Kopieer deze link naar je browser:`)
};

const pl_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli przycisk nie działa, skopiuj ten link do przeglądarki:`)
};

const pt_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se o botão não funcionar, copie este link no seu navegador:`)
};

const ru_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если кнопка не работает, скопируйте эту ссылку в браузер:`)
};

const sv_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om knappen inte fungerar kopierar du den här länken till webbläsaren:`)
};

const tr_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düğme çalışmazsa bu bağlantıyı tarayıcına kopyala:`)
};

const zh_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果按钮无法使用，请将此链接复制到浏览器中：`)
};

const ja_emails_auth_link_fallback = /** @type {(inputs: Emails_Auth_Link_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ボタンが使えない場合は、このリンクをブラウザーにコピーしてください：`)
};

/**
* | output |
* | --- |
* | "If the button doesn’t work, copy this link into your browser:" |
*
* @param {Emails_Auth_Link_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_link_fallback = /** @type {((inputs?: Emails_Auth_Link_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Link_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_link_fallback(inputs)
	if (locale === "de") return de_emails_auth_link_fallback(inputs)
	if (locale === "fr") return fr_emails_auth_link_fallback(inputs)
	if (locale === "it") return it_emails_auth_link_fallback(inputs)
	if (locale === "nl") return nl_emails_auth_link_fallback(inputs)
	if (locale === "pl") return pl_emails_auth_link_fallback(inputs)
	if (locale === "pt") return pt_emails_auth_link_fallback(inputs)
	if (locale === "ru") return ru_emails_auth_link_fallback(inputs)
	if (locale === "sv") return sv_emails_auth_link_fallback(inputs)
	if (locale === "tr") return tr_emails_auth_link_fallback(inputs)
	if (locale === "zh") return zh_emails_auth_link_fallback(inputs)
	if (locale === "ja") return ja_emails_auth_link_fallback(inputs)
	return en_emails_auth_link_fallback(inputs)
});
