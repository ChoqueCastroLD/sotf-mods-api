/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_Drafts_DetailInputs */

const en_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick up where you left off, or start something new below.`)
};

const es_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retoma donde lo dejaste o empieza algo nuevo abajo.`)
};

const de_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mach da weiter, wo du aufgehört hast, oder beginne unten etwas Neues.`)
};

const fr_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reprenez là où vous en étiez ou commencez autre chose ci-dessous.`)
};

const it_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprendi da dove eri rimasto o inizia qualcosa di nuovo qui sotto.`)
};

const nl_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ga verder waar je gebleven was, of begin hieronder iets nieuws.`)
};

const pl_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć tam, gdzie skończyłeś, albo zacznij coś nowego poniżej.`)
};

const pt_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue de onde parou ou comece algo novo abaixo.`)
};

const ru_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжите с того места, где остановились, или начните новое ниже.`)
};

const sv_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt där du slutade, eller börja något nytt nedan.`)
};

const tr_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldığın yerden devam et ya da aşağıda yeni bir şeye başla.`)
};

const zh_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从上次停下的地方继续，或在下方开始新的内容。`)
};

const ja_upload_new_drafts_detail = /** @type {(inputs: Upload_New_Drafts_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続きから再開するか、下で新しく始めましょう。`)
};

/**
* | output |
* | --- |
* | "Pick up where you left off, or start something new below." |
*
* @param {Upload_New_Drafts_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_drafts_detail = /** @type {((inputs?: Upload_New_Drafts_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Drafts_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_drafts_detail(inputs)
	if (locale === "de") return de_upload_new_drafts_detail(inputs)
	if (locale === "fr") return fr_upload_new_drafts_detail(inputs)
	if (locale === "it") return it_upload_new_drafts_detail(inputs)
	if (locale === "nl") return nl_upload_new_drafts_detail(inputs)
	if (locale === "pl") return pl_upload_new_drafts_detail(inputs)
	if (locale === "pt") return pt_upload_new_drafts_detail(inputs)
	if (locale === "ru") return ru_upload_new_drafts_detail(inputs)
	if (locale === "sv") return sv_upload_new_drafts_detail(inputs)
	if (locale === "tr") return tr_upload_new_drafts_detail(inputs)
	if (locale === "zh") return zh_upload_new_drafts_detail(inputs)
	if (locale === "ja") return ja_upload_new_drafts_detail(inputs)
	return en_upload_new_drafts_detail(inputs)
});
