/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Jams_Admin_CreatedInputs */

const en_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" created as a draft.`)
};

const es_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.title}» creado como borrador.`)
};

const de_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.title}“ als Entwurf erstellt.`)
};

const fr_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.title} » créé en brouillon.`)
};

const it_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.title}» creato come bozza.`)
};

const nl_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" is als concept gemaakt.`)
};

const pl_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.title}” utworzono jako szkic.`)
};

const pt_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" criado como rascunho.`)
};

const ru_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.title}» создан как черновик.`)
};

const sv_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" skapades som utkast.`)
};

const tr_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" taslak olarak oluşturuldu.`)
};

const zh_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将「${i?.title}」创建为草稿。`)
};

const ja_jams_admin_created = /** @type {(inputs: Jams_Admin_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.title}」を下書きとして作成しました。`)
};

/**
* | output |
* | --- |
* | "\"{title}\" created as a draft." |
*
* @param {Jams_Admin_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_created = /** @type {((inputs: Jams_Admin_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_created(inputs)
	if (locale === "de") return de_jams_admin_created(inputs)
	if (locale === "fr") return fr_jams_admin_created(inputs)
	if (locale === "it") return it_jams_admin_created(inputs)
	if (locale === "nl") return nl_jams_admin_created(inputs)
	if (locale === "pl") return pl_jams_admin_created(inputs)
	if (locale === "pt") return pt_jams_admin_created(inputs)
	if (locale === "ru") return ru_jams_admin_created(inputs)
	if (locale === "sv") return sv_jams_admin_created(inputs)
	if (locale === "tr") return tr_jams_admin_created(inputs)
	if (locale === "zh") return zh_jams_admin_created(inputs)
	if (locale === "ja") return ja_jams_admin_created(inputs)
	return en_jams_admin_created(inputs)
});
