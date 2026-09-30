/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Add_TitleInputs */

const en_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add ${i?.name} to a kit`)
};

const es_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir ${i?.name} a un kit`)
};

const de_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zu einem Kit hinzufügen`)
};

const fr_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter ${i?.name} à un kit`)
};

const it_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi ${i?.name} a un kit`)
};

const nl_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aan een kit toevoegen`)
};

const pl_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj ${i?.name} do zestawu`)
};

const pt_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar ${i?.name} a um kit`)
};

const ru_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить ${i?.name} в набор`)
};

const sv_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till ${i?.name} i ett kit`)
};

const tr_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modunu bir kite ekle`)
};

const zh_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 添加到套装`)
};

const ja_kits_add_title = /** @type {(inputs: Kits_Add_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をキットに追加`)
};

/**
* | output |
* | --- |
* | "Add {name} to a kit" |
*
* @param {Kits_Add_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_title = /** @type {((inputs: Kits_Add_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_title(inputs)
	if (locale === "de") return de_kits_add_title(inputs)
	if (locale === "fr") return fr_kits_add_title(inputs)
	if (locale === "it") return it_kits_add_title(inputs)
	if (locale === "nl") return nl_kits_add_title(inputs)
	if (locale === "pl") return pl_kits_add_title(inputs)
	if (locale === "pt") return pt_kits_add_title(inputs)
	if (locale === "ru") return ru_kits_add_title(inputs)
	if (locale === "sv") return sv_kits_add_title(inputs)
	if (locale === "tr") return tr_kits_add_title(inputs)
	if (locale === "zh") return zh_kits_add_title(inputs)
	if (locale === "ja") return ja_kits_add_title(inputs)
	return en_kits_add_title(inputs)
});
