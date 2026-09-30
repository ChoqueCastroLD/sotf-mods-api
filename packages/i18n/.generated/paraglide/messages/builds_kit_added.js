/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown> }} Builds_Kit_AddedInputs */

const en_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Added to ${i?.kit}`)
};

const es_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadido a ${i?.kit}`)
};

const de_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zu ${i?.kit} hinzugefügt`)
};

const fr_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouté à ${i?.kit}`)
};

const it_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiunto a ${i?.kit}`)
};

const nl_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toegevoegd aan ${i?.kit}`)
};

const pl_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano do ${i?.kit}`)
};

const pt_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionado a ${i?.kit}`)
};

const ru_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавлено в ${i?.kit}`)
};

const sv_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tillagd i ${i?.kit}`)
};

const tr_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} içine eklendi`)
};

const zh_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已添加到 ${i?.kit}`)
};

const ja_builds_kit_added = /** @type {(inputs: Builds_Kit_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} に追加しました`)
};

/**
* | output |
* | --- |
* | "Added to {kit}" |
*
* @param {Builds_Kit_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kit_added = /** @type {((inputs: Builds_Kit_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kit_added(inputs)
	if (locale === "de") return de_builds_kit_added(inputs)
	if (locale === "fr") return fr_builds_kit_added(inputs)
	if (locale === "it") return it_builds_kit_added(inputs)
	if (locale === "nl") return nl_builds_kit_added(inputs)
	if (locale === "pl") return pl_builds_kit_added(inputs)
	if (locale === "pt") return pt_builds_kit_added(inputs)
	if (locale === "ru") return ru_builds_kit_added(inputs)
	if (locale === "sv") return sv_builds_kit_added(inputs)
	if (locale === "tr") return tr_builds_kit_added(inputs)
	if (locale === "zh") return zh_builds_kit_added(inputs)
	if (locale === "ja") return ja_builds_kit_added(inputs)
	return en_builds_kit_added(inputs)
});
