/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ batch: NonNullable<unknown>, total: NonNullable<unknown> }} Admin_Recat_ProgressInputs */

const en_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Applying batch ${i?.batch} of ${i?.total}…`)
};

const es_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aplicando el lote ${i?.batch} de ${i?.total}…`)
};

const de_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stapel ${i?.batch} von ${i?.total} wird angewendet …`)
};

const fr_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Application du lot ${i?.batch} sur ${i?.total}…`)
};

const it_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Applicazione del lotto ${i?.batch} di ${i?.total}…`)
};

const nl_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Batch ${i?.batch} van ${i?.total} toepassen…`)
};

const pl_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stosowanie partii ${i?.batch} z ${i?.total}…`)
};

const pt_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aplicando o lote ${i?.batch} de ${i?.total}…`)
};

const ru_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Применяем пакет ${i?.batch} из ${i?.total}…`)
};

const sv_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tillämpar omgång ${i?.batch} av ${i?.total} …`)
};

const tr_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} partiden ${i?.batch}. uygulanıyor…`)
};

const zh_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在应用第 ${i?.batch}/${i?.total} 批……`)
};

const ja_admin_recat_progress = /** @type {(inputs: Admin_Recat_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.batch} 件目のバッチを適用しています…`)
};

/**
* | output |
* | --- |
* | "Applying batch {batch} of {total}…" |
*
* @param {Admin_Recat_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_progress = /** @type {((inputs: Admin_Recat_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_progress(inputs)
	if (locale === "de") return de_admin_recat_progress(inputs)
	if (locale === "fr") return fr_admin_recat_progress(inputs)
	if (locale === "it") return it_admin_recat_progress(inputs)
	if (locale === "nl") return nl_admin_recat_progress(inputs)
	if (locale === "pl") return pl_admin_recat_progress(inputs)
	if (locale === "pt") return pt_admin_recat_progress(inputs)
	if (locale === "ru") return ru_admin_recat_progress(inputs)
	if (locale === "sv") return sv_admin_recat_progress(inputs)
	if (locale === "tr") return tr_admin_recat_progress(inputs)
	if (locale === "zh") return zh_admin_recat_progress(inputs)
	if (locale === "ja") return ja_admin_recat_progress(inputs)
	return en_admin_recat_progress(inputs)
});
