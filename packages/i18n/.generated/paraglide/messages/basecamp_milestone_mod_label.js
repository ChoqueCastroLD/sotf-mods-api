/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Milestone_Mod_LabelInputs */

const en_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progress of ${i?.name} to its next milestone`)
};

const es_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progreso de ${i?.name} hacia su próximo hito`)
};

const de_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fortschritt von ${i?.name} zum nächsten Meilenstein`)
};

const fr_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progression de ${i?.name} vers son prochain palier`)
};

const it_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progressi di ${i?.name} verso il prossimo traguardo`)
};

const nl_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voortgang van ${i?.name} naar de volgende mijlpaal`)
};

const pl_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Postęp ${i?.name} do następnego kamienia milowego`)
};

const pt_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progresso de ${i?.name} até o próximo marco`)
};

const ru_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Прогресс ${i?.name} до следующей вехи`)
};

const sv_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Framsteg för ${i?.name} mot nästa milstolpe`)
};

const tr_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için sıradaki dönüm noktasına ilerleme`)
};

const zh_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 距下一个里程碑的进度`)
};

const ja_basecamp_milestone_mod_label = /** @type {(inputs: Basecamp_Milestone_Mod_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の次のマイルストーンまでの進捗`)
};

/**
* | output |
* | --- |
* | "Progress of {name} to its next milestone" |
*
* @param {Basecamp_Milestone_Mod_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_mod_label = /** @type {((inputs: Basecamp_Milestone_Mod_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_Mod_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_mod_label(inputs)
	if (locale === "de") return de_basecamp_milestone_mod_label(inputs)
	if (locale === "fr") return fr_basecamp_milestone_mod_label(inputs)
	if (locale === "it") return it_basecamp_milestone_mod_label(inputs)
	if (locale === "nl") return nl_basecamp_milestone_mod_label(inputs)
	if (locale === "pl") return pl_basecamp_milestone_mod_label(inputs)
	if (locale === "pt") return pt_basecamp_milestone_mod_label(inputs)
	if (locale === "ru") return ru_basecamp_milestone_mod_label(inputs)
	if (locale === "sv") return sv_basecamp_milestone_mod_label(inputs)
	if (locale === "tr") return tr_basecamp_milestone_mod_label(inputs)
	if (locale === "zh") return zh_basecamp_milestone_mod_label(inputs)
	if (locale === "ja") return ja_basecamp_milestone_mod_label(inputs)
	return en_basecamp_milestone_mod_label(inputs)
});
