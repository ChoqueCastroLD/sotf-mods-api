/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Unlisted_TextInputs */

const en_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only people with the link can find this mod.`)
};

const es_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo quien tenga el enlace puede encontrar este mod.`)
};

const de_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur wer den Link hat, findet diesen Mod.`)
};

const fr_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seules les personnes qui ont le lien peuvent trouver ce mod.`)
};

const it_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo chi ha il link può trovare questa mod.`)
};

const nl_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen mensen met de link kunnen deze mod vinden.`)
};

const pl_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod znajdą tylko osoby z linkiem.`)
};

const pt_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só quem tem o link consegue encontrar este mod.`)
};

const ru_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти этот мод можно только по ссылке.`)
};

const sv_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara den som har länken kan hitta den här moden.`)
};

const tr_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu yalnızca bağlantıya sahip olanlar bulabilir.`)
};

const zh_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有拿到链接的人才能找到此模组。`)
};

const ja_mod_banner_unlisted_text = /** @type {(inputs: Mod_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD はリンクを知っている人だけが見つけられます。`)
};

/**
* | output |
* | --- |
* | "Only people with the link can find this mod." |
*
* @param {Mod_Banner_Unlisted_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_unlisted_text = /** @type {((inputs?: Mod_Banner_Unlisted_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Unlisted_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_unlisted_text(inputs)
	if (locale === "de") return de_mod_banner_unlisted_text(inputs)
	if (locale === "fr") return fr_mod_banner_unlisted_text(inputs)
	if (locale === "it") return it_mod_banner_unlisted_text(inputs)
	if (locale === "nl") return nl_mod_banner_unlisted_text(inputs)
	if (locale === "pl") return pl_mod_banner_unlisted_text(inputs)
	if (locale === "pt") return pt_mod_banner_unlisted_text(inputs)
	if (locale === "ru") return ru_mod_banner_unlisted_text(inputs)
	if (locale === "sv") return sv_mod_banner_unlisted_text(inputs)
	if (locale === "tr") return tr_mod_banner_unlisted_text(inputs)
	if (locale === "zh") return zh_mod_banner_unlisted_text(inputs)
	if (locale === "ja") return ja_mod_banner_unlisted_text(inputs)
	return en_mod_banner_unlisted_text(inputs)
});
