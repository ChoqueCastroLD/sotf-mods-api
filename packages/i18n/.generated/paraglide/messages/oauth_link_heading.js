/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_HeadingInputs */

const en_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link your Discord account`)
};

const es_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincula tu cuenta de Discord`)
};

const de_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verknüpfe dein Discord-Konto`)
};

const fr_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liez votre compte Discord`)
};

const it_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega il tuo account Discord`)
};

const nl_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppel je Discord-account`)
};

const pl_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz konto Discord`)
};

const pt_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincule sua conta do Discord`)
};

const ru_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привяжите аккаунт Discord`)
};

const sv_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla ditt Discord-konto`)
};

const tr_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord hesabını bağla`)
};

const zh_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联你的 Discord 账号`)
};

const ja_oauth_link_heading = /** @type {(inputs: Oauth_Link_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord アカウントを連携`)
};

/**
* | output |
* | --- |
* | "Link your Discord account" |
*
* @param {Oauth_Link_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_heading = /** @type {((inputs?: Oauth_Link_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_heading(inputs)
	if (locale === "de") return de_oauth_link_heading(inputs)
	if (locale === "fr") return fr_oauth_link_heading(inputs)
	if (locale === "it") return it_oauth_link_heading(inputs)
	if (locale === "nl") return nl_oauth_link_heading(inputs)
	if (locale === "pl") return pl_oauth_link_heading(inputs)
	if (locale === "pt") return pt_oauth_link_heading(inputs)
	if (locale === "ru") return ru_oauth_link_heading(inputs)
	if (locale === "sv") return sv_oauth_link_heading(inputs)
	if (locale === "tr") return tr_oauth_link_heading(inputs)
	if (locale === "zh") return zh_oauth_link_heading(inputs)
	if (locale === "ja") return ja_oauth_link_heading(inputs)
	return en_oauth_link_heading(inputs)
});
