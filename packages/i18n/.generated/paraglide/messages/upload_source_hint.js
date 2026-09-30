/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Source_HintInputs */

const en_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A public repository earns trust and helps others learn.`)
};

const es_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un repositorio público da confianza y ayuda a otros a aprender.`)
};

const de_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein öffentliches Repository schafft Vertrauen und hilft anderen beim Lernen.`)
};

const fr_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un dépôt public inspire confiance et aide les autres à apprendre.`)
};

const it_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un repository pubblico crea fiducia e aiuta gli altri a imparare.`)
};

const nl_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een openbare repository wekt vertrouwen en helpt anderen leren.`)
};

const pl_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiczne repozytorium buduje zaufanie i pomaga innym się uczyć.`)
};

const pt_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um repositório público gera confiança e ajuda outros a aprender.`)
};

const ru_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытый репозиторий вызывает доверие и помогает другим учиться.`)
};

const sv_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett publikt repo skapar förtroende och hjälper andra att lära sig.`)
};

const tr_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık bir depo güven verir ve başkalarının öğrenmesine yardım eder.`)
};

const zh_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开仓库能赢得信任，也能帮助他人学习。`)
};

const ja_upload_source_hint = /** @type {(inputs: Upload_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開リポジトリは信頼につながり、ほかの人の学びにもなります。`)
};

/**
* | output |
* | --- |
* | "A public repository earns trust and helps others learn." |
*
* @param {Upload_Source_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_source_hint = /** @type {((inputs?: Upload_Source_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Source_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_source_hint(inputs)
	if (locale === "de") return de_upload_source_hint(inputs)
	if (locale === "fr") return fr_upload_source_hint(inputs)
	if (locale === "it") return it_upload_source_hint(inputs)
	if (locale === "nl") return nl_upload_source_hint(inputs)
	if (locale === "pl") return pl_upload_source_hint(inputs)
	if (locale === "pt") return pt_upload_source_hint(inputs)
	if (locale === "ru") return ru_upload_source_hint(inputs)
	if (locale === "sv") return sv_upload_source_hint(inputs)
	if (locale === "tr") return tr_upload_source_hint(inputs)
	if (locale === "zh") return zh_upload_source_hint(inputs)
	if (locale === "ja") return ja_upload_source_hint(inputs)
	return en_upload_source_hint(inputs)
});
