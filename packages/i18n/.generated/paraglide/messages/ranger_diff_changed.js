/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_ChangedInputs */

const en_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changed:`)
};

const es_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiado:`)
};

const de_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geändert:`)
};

const fr_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifié :`)
};

const it_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modificato:`)
};

const nl_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewijzigd:`)
};

const pl_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniono:`)
};

const pt_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterado:`)
};

const ru_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменено:`)
};

const sv_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändrad:`)
};

const tr_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişti:`)
};

const zh_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改：`)
};

const ja_ranger_diff_changed = /** @type {(inputs: Ranger_Diff_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更：`)
};

/**
* | output |
* | --- |
* | "Changed:" |
*
* @param {Ranger_Diff_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_changed = /** @type {((inputs?: Ranger_Diff_ChangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_ChangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_changed(inputs)
	if (locale === "de") return de_ranger_diff_changed(inputs)
	if (locale === "fr") return fr_ranger_diff_changed(inputs)
	if (locale === "it") return it_ranger_diff_changed(inputs)
	if (locale === "nl") return nl_ranger_diff_changed(inputs)
	if (locale === "pl") return pl_ranger_diff_changed(inputs)
	if (locale === "pt") return pt_ranger_diff_changed(inputs)
	if (locale === "ru") return ru_ranger_diff_changed(inputs)
	if (locale === "sv") return sv_ranger_diff_changed(inputs)
	if (locale === "tr") return tr_ranger_diff_changed(inputs)
	if (locale === "zh") return zh_ranger_diff_changed(inputs)
	if (locale === "ja") return ja_ranger_diff_changed(inputs)
	return en_ranger_diff_changed(inputs)
});
