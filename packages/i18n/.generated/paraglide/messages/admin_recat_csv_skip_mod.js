/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown>, value: NonNullable<unknown> }} Admin_Recat_Csv_Skip_ModInputs */

const en_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}: unknown mod “${i?.value}” (use the numeric modId).`)
};

const es_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}: mod desconocido «${i?.value}» (usa el modId numérico).`)
};

const de_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}: unbekannter Mod „${i?.value}“ (nutze die numerische modId).`)
};

const fr_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line} : mod inconnu « ${i?.value} » (utilisez le modId numérique).`)
};

const it_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}: mod sconosciuta «${i?.value}» (usa il modId numerico).`)
};

const nl_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}: onbekende mod ‘${i?.value}’ (gebruik de numerieke modId).`)
};

const pl_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}: nieznany mod „${i?.value}” (użyj liczbowego modId).`)
};

const pt_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}: mod desconhecido “${i?.value}” (use o modId numérico).`)
};

const ru_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}: неизвестный мод «${i?.value}» (используйте числовой modId).`)
};

const sv_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}: okänd modd ”${i?.value}” (använd det numeriska modId).`)
};

const tr_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}: bilinmeyen mod “${i?.value}” (sayısal modId’yi kullan).`)
};

const zh_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行：未知模组“${i?.value}”（请使用数字 modId）。`)
};

const ja_admin_recat_csv_skip_mod = /** @type {(inputs: Admin_Recat_Csv_Skip_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目：不明な MOD「${i?.value}」（数値の modId を使ってください）。`)
};

/**
* | output |
* | --- |
* | "Line {line}: unknown mod “{value}” (use the numeric modId)." |
*
* @param {Admin_Recat_Csv_Skip_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_skip_mod = /** @type {((inputs: Admin_Recat_Csv_Skip_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_skip_mod(inputs)
	if (locale === "de") return de_admin_recat_csv_skip_mod(inputs)
	if (locale === "fr") return fr_admin_recat_csv_skip_mod(inputs)
	if (locale === "it") return it_admin_recat_csv_skip_mod(inputs)
	if (locale === "nl") return nl_admin_recat_csv_skip_mod(inputs)
	if (locale === "pl") return pl_admin_recat_csv_skip_mod(inputs)
	if (locale === "pt") return pt_admin_recat_csv_skip_mod(inputs)
	if (locale === "ru") return ru_admin_recat_csv_skip_mod(inputs)
	if (locale === "sv") return sv_admin_recat_csv_skip_mod(inputs)
	if (locale === "tr") return tr_admin_recat_csv_skip_mod(inputs)
	if (locale === "zh") return zh_admin_recat_csv_skip_mod(inputs)
	if (locale === "ja") return ja_admin_recat_csv_skip_mod(inputs)
	return en_admin_recat_csv_skip_mod(inputs)
});
