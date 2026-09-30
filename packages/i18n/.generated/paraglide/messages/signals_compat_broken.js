/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, status: NonNullable<unknown>, build: NonNullable<unknown> }} Signals_Compat_BrokenInputs */

const en_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} is reported broken on ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} is reported mixed on ${i?.build}`)
	
};

const es_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} aparece roto en ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} aparece con resultados mixtos en ${i?.build}`)
	
};

const de_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} wird auf ${i?.build} als kaputt gemeldet`);
	return /** @type {LocalizedString} */ (`${i?.mod} wird auf ${i?.build} als gemischt gemeldet`)
	
};

const fr_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} est signalé cassé sur ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} est signalé mitigé sur ${i?.build}`)
	
};

const it_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} risulta non funzionante su ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} risulta con esiti misti su ${i?.build}`)
	
};

const nl_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} wordt als kapot gemeld op ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} wordt als wisselend gemeld op ${i?.build}`)
	
};

const pl_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} jest zgłaszany jako niedziałający na ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} jest zgłaszany jako działający różnie na ${i?.build}`)
	
};

const pt_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} está sendo relatado como quebrado em ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} está sendo relatado como instável em ${i?.build}`)
	
};

const ru_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} отмечен как неработающий на ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} отмечен как работающий частично на ${i?.build}`)
	
};

const sv_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} rapporteras som trasig på ${i?.build}`);
	return /** @type {LocalizedString} */ (`${i?.mod} rapporteras som blandad på ${i?.build}`)
	
};

const tr_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod}, ${i?.build} üzerinde bozuk olarak bildiriliyor`);
	return /** @type {LocalizedString} */ (`${i?.mod}, ${i?.build} üzerinde karışık olarak bildiriliyor`)
	
};

const zh_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} 在 ${i?.build} 上被报告为失效`);
	return /** @type {LocalizedString} */ (`${i?.mod} 在 ${i?.build} 上被报告为部分可用`)
	
};

const ja_signals_compat_broken = /** @type {(inputs: Signals_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.mod} は ${i?.build} で動作しないと報告されています`);
	return /** @type {LocalizedString} */ (`${i?.mod} は ${i?.build} で動作が不安定と報告されています`)
	
};

/**
* | status | output |
* | --- | --- |
* | "broken" | "{mod} is reported broken on {build}" |
* | * | "{mod} is reported mixed on {build}" |
*
* @param {Signals_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_compat_broken = /** @type {((inputs: Signals_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_compat_broken(inputs)
	if (locale === "de") return de_signals_compat_broken(inputs)
	if (locale === "fr") return fr_signals_compat_broken(inputs)
	if (locale === "it") return it_signals_compat_broken(inputs)
	if (locale === "nl") return nl_signals_compat_broken(inputs)
	if (locale === "pl") return pl_signals_compat_broken(inputs)
	if (locale === "pt") return pt_signals_compat_broken(inputs)
	if (locale === "ru") return ru_signals_compat_broken(inputs)
	if (locale === "sv") return sv_signals_compat_broken(inputs)
	if (locale === "tr") return tr_signals_compat_broken(inputs)
	if (locale === "zh") return zh_signals_compat_broken(inputs)
	if (locale === "ja") return ja_signals_compat_broken(inputs)
	return en_signals_compat_broken(inputs)
});
