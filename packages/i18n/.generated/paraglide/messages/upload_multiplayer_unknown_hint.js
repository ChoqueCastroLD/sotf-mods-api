/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Unknown_HintInputs */

const en_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivors’ field reports will tell.`)
};

const es_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los reportes de campo de los supervivientes lo dirán.`)
};

const de_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Feldberichte der Überlebenden werden es zeigen.`)
};

const fr_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rapports de terrain des survivants le diront.`)
};

const it_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo diranno i rapporti sul campo dei sopravvissuti.`)
};

const nl_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De veldrapporten van overlevenden zullen het uitwijzen.`)
};

const pl_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokażą to raporty terenowe ocalałych.`)
};

const pt_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os relatórios de campo dos sobreviventes vão dizer.`)
};

const ru_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это покажут полевые отчёты выживших.`)
};

const sv_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevarnas fältrapporter kommer att visa det.`)
};

const tr_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalanların saha raporları gösterecek.`)
};

const zh_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者的实地报告会给出答案。`)
};

const ja_upload_multiplayer_unknown_hint = /** @type {(inputs: Upload_Multiplayer_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーのフィールドレポートで明らかになります。`)
};

/**
* | output |
* | --- |
* | "Survivors’ field reports will tell." |
*
* @param {Upload_Multiplayer_Unknown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_unknown_hint = /** @type {((inputs?: Upload_Multiplayer_Unknown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Unknown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_unknown_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_unknown_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_unknown_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_unknown_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_unknown_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_unknown_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_unknown_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_unknown_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_unknown_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_unknown_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_unknown_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_unknown_hint(inputs)
	return en_upload_multiplayer_unknown_hint(inputs)
});
