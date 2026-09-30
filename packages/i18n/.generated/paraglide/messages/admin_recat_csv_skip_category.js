/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown>, value: NonNullable<unknown> }} Admin_Recat_Csv_Skip_CategoryInputs */

const en_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}: “${i?.value}” is not an active mod category.`)
};

const es_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}: «${i?.value}» no es una categoría de mods activa.`)
};

const de_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}: „${i?.value}“ ist keine aktive Mod-Kategorie.`)
};

const fr_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line} : « ${i?.value} » n’est pas une catégorie de mods active.`)
};

const it_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}: «${i?.value}» non è una categoria di mod attiva.`)
};

const nl_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}: ‘${i?.value}’ is geen actieve modcategorie.`)
};

const pl_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}: „${i?.value}” nie jest aktywną kategorią modów.`)
};

const pt_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}: “${i?.value}” não é uma categoria de mods ativa.`)
};

const ru_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}: «${i?.value}» — не активная категория модов.`)
};

const sv_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}: ”${i?.value}” är ingen aktiv moddkategori.`)
};

const tr_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}: “${i?.value}” aktif bir mod kategorisi değil.`)
};

const zh_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行：“${i?.value}”不是有效的模组分类。`)
};

const ja_admin_recat_csv_skip_category = /** @type {(inputs: Admin_Recat_Csv_Skip_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目：「${i?.value}」は有効な MOD カテゴリーではありません。`)
};

/**
* | output |
* | --- |
* | "Line {line}: “{value}” is not an active mod category." |
*
* @param {Admin_Recat_Csv_Skip_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_skip_category = /** @type {((inputs: Admin_Recat_Csv_Skip_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_skip_category(inputs)
	if (locale === "de") return de_admin_recat_csv_skip_category(inputs)
	if (locale === "fr") return fr_admin_recat_csv_skip_category(inputs)
	if (locale === "it") return it_admin_recat_csv_skip_category(inputs)
	if (locale === "nl") return nl_admin_recat_csv_skip_category(inputs)
	if (locale === "pl") return pl_admin_recat_csv_skip_category(inputs)
	if (locale === "pt") return pt_admin_recat_csv_skip_category(inputs)
	if (locale === "ru") return ru_admin_recat_csv_skip_category(inputs)
	if (locale === "sv") return sv_admin_recat_csv_skip_category(inputs)
	if (locale === "tr") return tr_admin_recat_csv_skip_category(inputs)
	if (locale === "zh") return zh_admin_recat_csv_skip_category(inputs)
	if (locale === "ja") return ja_admin_recat_csv_skip_category(inputs)
	return en_admin_recat_csv_skip_category(inputs)
});
