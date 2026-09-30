/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_TitleInputs */

const en_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share this mod`)
};

const es_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir este mod`)
};

const de_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Mod teilen`)
};

const fr_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager ce mod`)
};

const it_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi questa mod`)
};

const nl_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod delen`)
};

const pl_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij ten mod`)
};

const pt_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhar este mod`)
};

const ru_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться модом`)
};

const sv_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela moden`)
};

const tr_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu paylaş`)
};

const zh_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享此模组`)
};

const ja_mod_share_title = /** @type {(inputs: Mod_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD を共有`)
};

/**
* | output |
* | --- |
* | "Share this mod" |
*
* @param {Mod_Share_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_title = /** @type {((inputs?: Mod_Share_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_title(inputs)
	if (locale === "de") return de_mod_share_title(inputs)
	if (locale === "fr") return fr_mod_share_title(inputs)
	if (locale === "it") return it_mod_share_title(inputs)
	if (locale === "nl") return nl_mod_share_title(inputs)
	if (locale === "pl") return pl_mod_share_title(inputs)
	if (locale === "pt") return pt_mod_share_title(inputs)
	if (locale === "ru") return ru_mod_share_title(inputs)
	if (locale === "sv") return sv_mod_share_title(inputs)
	if (locale === "tr") return tr_mod_share_title(inputs)
	if (locale === "zh") return zh_mod_share_title(inputs)
	if (locale === "ja") return ja_mod_share_title(inputs)
	return en_mod_share_title(inputs)
});
