/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown>, value: NonNullable<unknown> }} Admin_Recat_Csv_Skip_DuplicateInputs */

const en_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}: mod ${i?.value} appears twice; the first line wins.`)
};

const es_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}: el mod ${i?.value} aparece dos veces; vale la primera línea.`)
};

const de_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}: Mod ${i?.value} kommt doppelt vor; die erste Zeile gilt.`)
};

const fr_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line} : le mod ${i?.value} apparaît deux fois ; la première ligne l’emporte.`)
};

const it_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}: la mod ${i?.value} compare due volte; vale la prima riga.`)
};

const nl_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}: mod ${i?.value} komt twee keer voor; de eerste regel telt.`)
};

const pl_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}: mod ${i?.value} występuje dwa razy; liczy się pierwszy wiersz.`)
};

const pt_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}: o mod ${i?.value} aparece duas vezes; vale a primeira linha.`)
};

const ru_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}: мод ${i?.value} встречается дважды; действует первая строка.`)
};

const sv_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}: modd ${i?.value} förekommer två gånger; första raden gäller.`)
};

const tr_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}: ${i?.value} modu iki kez geçiyor; ilk satır geçerli.`)
};

const zh_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行：模组 ${i?.value} 出现了两次；以第一行为准。`)
};

const ja_admin_recat_csv_skip_duplicate = /** @type {(inputs: Admin_Recat_Csv_Skip_DuplicateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目：MOD ${i?.value} が重複しています。最初の行が優先されます。`)
};

/**
* | output |
* | --- |
* | "Line {line}: mod {value} appears twice; the first line wins." |
*
* @param {Admin_Recat_Csv_Skip_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_skip_duplicate = /** @type {((inputs: Admin_Recat_Csv_Skip_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "de") return de_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "fr") return fr_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "it") return it_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "nl") return nl_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "pl") return pl_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "pt") return pt_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "ru") return ru_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "sv") return sv_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "tr") return tr_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "zh") return zh_admin_recat_csv_skip_duplicate(inputs)
	if (locale === "ja") return ja_admin_recat_csv_skip_duplicate(inputs)
	return en_admin_recat_csv_skip_duplicate(inputs)
});
