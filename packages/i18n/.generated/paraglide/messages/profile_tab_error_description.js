/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tab_Error_DescriptionInputs */

const en_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The server took too long to answer. Try again in a moment.`)
};

const es_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El servidor ha tardado demasiado en responder. Inténtalo de nuevo en un momento.`)
};

const de_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Server hat zu lange gebraucht. Versuche es gleich noch einmal.`)
};

const fr_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le serveur a mis trop de temps à répondre. Réessayez dans un instant.`)
};

const it_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il server ha impiegato troppo a rispondere. Riprova tra un momento.`)
};

const nl_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De server deed er te lang over. Probeer het zo meteen opnieuw.`)
};

const pl_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer odpowiadał zbyt długo. Spróbuj ponownie za chwilę.`)
};

const pt_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O servidor demorou demais para responder. Tente de novo em instantes.`)
};

const ru_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сервер отвечал слишком долго. Попробуйте ещё раз через минуту.`)
};

const sv_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servern tog för lång tid på sig. Försök igen om en stund.`)
};

const tr_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu çok geç yanıt verdi. Birazdan tekrar dene.`)
};

const zh_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器响应超时，请稍后重试。`)
};

const ja_profile_tab_error_description = /** @type {(inputs: Profile_Tab_Error_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーの応答に時間がかかりすぎました。少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The server took too long to answer. Try again in a moment." |
*
* @param {Profile_Tab_Error_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tab_error_description = /** @type {((inputs?: Profile_Tab_Error_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tab_Error_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tab_error_description(inputs)
	if (locale === "de") return de_profile_tab_error_description(inputs)
	if (locale === "fr") return fr_profile_tab_error_description(inputs)
	if (locale === "it") return it_profile_tab_error_description(inputs)
	if (locale === "nl") return nl_profile_tab_error_description(inputs)
	if (locale === "pl") return pl_profile_tab_error_description(inputs)
	if (locale === "pt") return pt_profile_tab_error_description(inputs)
	if (locale === "ru") return ru_profile_tab_error_description(inputs)
	if (locale === "sv") return sv_profile_tab_error_description(inputs)
	if (locale === "tr") return tr_profile_tab_error_description(inputs)
	if (locale === "zh") return zh_profile_tab_error_description(inputs)
	if (locale === "ja") return ja_profile_tab_error_description(inputs)
	return en_profile_tab_error_description(inputs)
});
