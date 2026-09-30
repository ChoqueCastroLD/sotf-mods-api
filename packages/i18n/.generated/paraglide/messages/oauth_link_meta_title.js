/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_Meta_TitleInputs */

const en_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link Discord to your account`)
};

const es_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincula Discord a tu cuenta`)
};

const de_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord mit deinem Konto verknüpfen`)
};

const fr_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lier Discord à votre compte`)
};

const it_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega Discord al tuo account`)
};

const nl_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppel Discord aan je account`)
};

const pl_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz Discord ze swoim kontem`)
};

const pt_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincule o Discord à sua conta`)
};

const ru_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привязка Discord к аккаунту`)
};

const sv_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla Discord till ditt konto`)
};

const tr_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord’u hesabına bağla`)
};

const zh_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将 Discord 关联到你的账号`)
};

const ja_oauth_link_meta_title = /** @type {(inputs: Oauth_Link_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord をアカウントに連携`)
};

/**
* | output |
* | --- |
* | "Link Discord to your account" |
*
* @param {Oauth_Link_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_meta_title = /** @type {((inputs?: Oauth_Link_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_meta_title(inputs)
	if (locale === "de") return de_oauth_link_meta_title(inputs)
	if (locale === "fr") return fr_oauth_link_meta_title(inputs)
	if (locale === "it") return it_oauth_link_meta_title(inputs)
	if (locale === "nl") return nl_oauth_link_meta_title(inputs)
	if (locale === "pl") return pl_oauth_link_meta_title(inputs)
	if (locale === "pt") return pt_oauth_link_meta_title(inputs)
	if (locale === "ru") return ru_oauth_link_meta_title(inputs)
	if (locale === "sv") return sv_oauth_link_meta_title(inputs)
	if (locale === "tr") return tr_oauth_link_meta_title(inputs)
	if (locale === "zh") return zh_oauth_link_meta_title(inputs)
	if (locale === "ja") return ja_oauth_link_meta_title(inputs)
	return en_oauth_link_meta_title(inputs)
});
