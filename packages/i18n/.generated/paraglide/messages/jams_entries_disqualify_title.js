/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Jams_Entries_Disqualify_TitleInputs */

const en_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disqualify "${i?.name}"?`)
};

const es_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Descalificar «${i?.name}»?`)
};

const de_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ disqualifizieren?`)
};

const fr_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disqualifier « ${i?.name} » ?`)
};

const it_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Squalificare «${i?.name}»?`)
};

const nl_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.name}" diskwalificeren?`)
};

const pl_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zdyskwalifikować „${i?.name}”?`)
};

const pt_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Desqualificar "${i?.name}"?`)
};

const ru_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Дисквалифицировать «${i?.name}»?`)
};

const sv_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diskvalificera "${i?.name}"?`)
};

const tr_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.name}" diskalifiye edilsin mi?`)
};

const zh_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`取消「${i?.name}」的资格？`)
};

const ja_jams_entries_disqualify_title = /** @type {(inputs: Jams_Entries_Disqualify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」を失格にしますか？`)
};

/**
* | output |
* | --- |
* | "Disqualify \"{name}\"?" |
*
* @param {Jams_Entries_Disqualify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_disqualify_title = /** @type {((inputs: Jams_Entries_Disqualify_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Disqualify_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_disqualify_title(inputs)
	if (locale === "de") return de_jams_entries_disqualify_title(inputs)
	if (locale === "fr") return fr_jams_entries_disqualify_title(inputs)
	if (locale === "it") return it_jams_entries_disqualify_title(inputs)
	if (locale === "nl") return nl_jams_entries_disqualify_title(inputs)
	if (locale === "pl") return pl_jams_entries_disqualify_title(inputs)
	if (locale === "pt") return pt_jams_entries_disqualify_title(inputs)
	if (locale === "ru") return ru_jams_entries_disqualify_title(inputs)
	if (locale === "sv") return sv_jams_entries_disqualify_title(inputs)
	if (locale === "tr") return tr_jams_entries_disqualify_title(inputs)
	if (locale === "zh") return zh_jams_entries_disqualify_title(inputs)
	if (locale === "ja") return ja_jams_entries_disqualify_title(inputs)
	return en_jams_entries_disqualify_title(inputs)
});
