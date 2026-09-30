/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Pending_TitleInputs */

const en_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In review at the Ranger Station`)
};

const es_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revisión en el puesto de guardabosques`)
};

const de_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Prüfung an der Rangerstation`)
};

const fr_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revue au poste des rangers`)
};

const it_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In revisione alla stazione dei ranger`)
};

const nl_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In beoordeling bij de rangerpost`)
};

const pl_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W przeglądzie na posterunku strażników`)
};

const pt_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em revisão no posto dos guardas`)
};

const ru_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На проверке на посту рейнджеров`)
};

const sv_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Under granskning på rangerstationen`)
};

const tr_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu İstasyonu'nda inceleniyor`)
};

const zh_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林站审核中`)
};

const ja_basecamp_editor_pending_title = /** @type {(inputs: Basecamp_Editor_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーションで審査中`)
};

/**
* | output |
* | --- |
* | "In review at the Ranger Station" |
*
* @param {Basecamp_Editor_Pending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_pending_title = /** @type {((inputs?: Basecamp_Editor_Pending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Pending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_pending_title(inputs)
	if (locale === "de") return de_basecamp_editor_pending_title(inputs)
	if (locale === "fr") return fr_basecamp_editor_pending_title(inputs)
	if (locale === "it") return it_basecamp_editor_pending_title(inputs)
	if (locale === "nl") return nl_basecamp_editor_pending_title(inputs)
	if (locale === "pl") return pl_basecamp_editor_pending_title(inputs)
	if (locale === "pt") return pt_basecamp_editor_pending_title(inputs)
	if (locale === "ru") return ru_basecamp_editor_pending_title(inputs)
	if (locale === "sv") return sv_basecamp_editor_pending_title(inputs)
	if (locale === "tr") return tr_basecamp_editor_pending_title(inputs)
	if (locale === "zh") return zh_basecamp_editor_pending_title(inputs)
	if (locale === "ja") return ja_basecamp_editor_pending_title(inputs)
	return en_basecamp_editor_pending_title(inputs)
});
