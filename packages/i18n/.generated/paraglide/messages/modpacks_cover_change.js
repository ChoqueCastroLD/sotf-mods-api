/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_ChangeInputs */

const en_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change cover`)
};

const es_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar portada`)
};

const de_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild ändern`)
};

const fr_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer la couverture`)
};

const it_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia copertina`)
};

const nl_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag wijzigen`)
};

const pl_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień okładkę`)
};

const pt_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trocar capa`)
};

const ru_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить обложку`)
};

const sv_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt omslag`)
};

const tr_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı değiştir`)
};

const zh_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换封面`)
};

const ja_modpacks_cover_change = /** @type {(inputs: Modpacks_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを変更`)
};

/**
* | output |
* | --- |
* | "Change cover" |
*
* @param {Modpacks_Cover_ChangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_change = /** @type {((inputs?: Modpacks_Cover_ChangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_ChangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_change(inputs)
	if (locale === "de") return de_modpacks_cover_change(inputs)
	if (locale === "fr") return fr_modpacks_cover_change(inputs)
	if (locale === "it") return it_modpacks_cover_change(inputs)
	if (locale === "nl") return nl_modpacks_cover_change(inputs)
	if (locale === "pl") return pl_modpacks_cover_change(inputs)
	if (locale === "pt") return pt_modpacks_cover_change(inputs)
	if (locale === "ru") return ru_modpacks_cover_change(inputs)
	if (locale === "sv") return sv_modpacks_cover_change(inputs)
	if (locale === "tr") return tr_modpacks_cover_change(inputs)
	if (locale === "zh") return zh_modpacks_cover_change(inputs)
	if (locale === "ja") return ja_modpacks_cover_change(inputs)
	return en_modpacks_cover_change(inputs)
});
