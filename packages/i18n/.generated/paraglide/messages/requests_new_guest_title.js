/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_New_Guest_TitleInputs */

const en_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to ask for a mod`)
};

const es_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para pedir un mod`)
};

const de_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen Mod zu wünschen`)
};

const fr_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour demander un mod`)
};

const it_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per chiedere un mod`)
};

const nl_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een mod aan te vragen`)
};

const pl_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby poprosić o moda`)
};

const pt_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para pedir um mod`)
};

const ru_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы запросить мод`)
};

const sv_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att önska en mod`)
};

const tr_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod istemek için giriş yapın`)
};

const zh_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后提出请求`)
};

const ja_requests_new_guest_title = /** @type {(inputs: Requests_New_Guest_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストするにはログインしてください`)
};

/**
* | output |
* | --- |
* | "Log in to ask for a mod" |
*
* @param {Requests_New_Guest_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_new_guest_title = /** @type {((inputs?: Requests_New_Guest_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_New_Guest_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_new_guest_title(inputs)
	if (locale === "de") return de_requests_new_guest_title(inputs)
	if (locale === "fr") return fr_requests_new_guest_title(inputs)
	if (locale === "it") return it_requests_new_guest_title(inputs)
	if (locale === "nl") return nl_requests_new_guest_title(inputs)
	if (locale === "pl") return pl_requests_new_guest_title(inputs)
	if (locale === "pt") return pt_requests_new_guest_title(inputs)
	if (locale === "ru") return ru_requests_new_guest_title(inputs)
	if (locale === "sv") return sv_requests_new_guest_title(inputs)
	if (locale === "tr") return tr_requests_new_guest_title(inputs)
	if (locale === "zh") return zh_requests_new_guest_title(inputs)
	if (locale === "ja") return ja_requests_new_guest_title(inputs)
	return en_requests_new_guest_title(inputs)
});
