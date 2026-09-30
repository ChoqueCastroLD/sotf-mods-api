/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Broken_TitleInputs */

const en_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken on the current patch.`)
};

const es_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto en el parche actual.`)
};

const de_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defekt im aktuellen Patch.`)
};

const fr_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé sur le patch actuel.`)
};

const it_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona con la patch attuale.`)
};

const nl_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot op de huidige patch.`)
};

const pl_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa z obecną łatką.`)
};

const pt_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado no patch atual.`)
};

const ru_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает на текущем патче.`)
};

const sv_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig i den aktuella patchen.`)
};

const tr_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel yamada bozuk.`)
};

const zh_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前补丁下无法使用。`)
};

const ja_mod_banner_broken_title = /** @type {(inputs: Mod_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のパッチで動作しません。`)
};

/**
* | output |
* | --- |
* | "Broken on the current patch." |
*
* @param {Mod_Banner_Broken_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_broken_title = /** @type {((inputs?: Mod_Banner_Broken_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Broken_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_broken_title(inputs)
	if (locale === "de") return de_mod_banner_broken_title(inputs)
	if (locale === "fr") return fr_mod_banner_broken_title(inputs)
	if (locale === "it") return it_mod_banner_broken_title(inputs)
	if (locale === "nl") return nl_mod_banner_broken_title(inputs)
	if (locale === "pl") return pl_mod_banner_broken_title(inputs)
	if (locale === "pt") return pt_mod_banner_broken_title(inputs)
	if (locale === "ru") return ru_mod_banner_broken_title(inputs)
	if (locale === "sv") return sv_mod_banner_broken_title(inputs)
	if (locale === "tr") return tr_mod_banner_broken_title(inputs)
	if (locale === "zh") return zh_mod_banner_broken_title(inputs)
	if (locale === "ja") return ja_mod_banner_broken_title(inputs)
	return en_mod_banner_broken_title(inputs)
});
