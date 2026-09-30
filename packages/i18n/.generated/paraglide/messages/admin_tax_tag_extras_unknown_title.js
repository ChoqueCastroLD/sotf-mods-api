/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tag_Extras_Unknown_TitleInputs */

const en_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description and order can’t be loaded`)
};

const es_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pueden cargar la descripción ni el orden`)
};

const de_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung und Reihenfolge können nicht geladen werden`)
};

const fr_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger la description et l’ordre`)
};

const it_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare descrizione e ordine`)
};

const nl_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving en volgorde kunnen niet worden geladen`)
};

const pl_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można wczytać opisu i kolejności`)
};

const pt_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é possível carregar a descrição e a ordem`)
};

const ru_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить описание и порядок`)
};

const sv_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning och ordning kan inte laddas`)
};

const tr_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama ve sıra yüklenemiyor`)
};

const zh_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载描述和排序`)
};

const ja_admin_tax_tag_extras_unknown_title = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明と並び順を読み込めません`)
};

/**
* | output |
* | --- |
* | "Description and order can’t be loaded" |
*
* @param {Admin_Tax_Tag_Extras_Unknown_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_extras_unknown_title = /** @type {((inputs?: Admin_Tax_Tag_Extras_Unknown_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_Extras_Unknown_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "de") return de_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "fr") return fr_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "it") return it_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "nl") return nl_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "pl") return pl_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "pt") return pt_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "ru") return ru_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "sv") return sv_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "tr") return tr_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "zh") return zh_admin_tax_tag_extras_unknown_title(inputs)
	if (locale === "ja") return ja_admin_tax_tag_extras_unknown_title(inputs)
	return en_admin_tax_tag_extras_unknown_title(inputs)
});
