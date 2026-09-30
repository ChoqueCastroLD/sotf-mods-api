/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Did_It_WorkInputs */

const en_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Did it work?`)
};

const es_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Funcionó?`)
};

const de_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat es funktioniert?`)
};

const fr_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça a marché ?`)
};

const it_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha funzionato?`)
};

const nl_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkte het?`)
};

const pl_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadziałało?`)
};

const pt_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funcionou?`)
};

const ru_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заработало?`)
};

const sv_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerade det?`)
};

const tr_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştı mı?`)
};

const zh_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`能用吗？`)
};

const ja_me_did_it_work = /** @type {(inputs: Me_Did_It_WorkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did it work?" |
*
* @param {Me_Did_It_WorkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_did_it_work = /** @type {((inputs?: Me_Did_It_WorkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Did_It_WorkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_did_it_work(inputs)
	if (locale === "de") return de_me_did_it_work(inputs)
	if (locale === "fr") return fr_me_did_it_work(inputs)
	if (locale === "it") return it_me_did_it_work(inputs)
	if (locale === "nl") return nl_me_did_it_work(inputs)
	if (locale === "pl") return pl_me_did_it_work(inputs)
	if (locale === "pt") return pt_me_did_it_work(inputs)
	if (locale === "ru") return ru_me_did_it_work(inputs)
	if (locale === "sv") return sv_me_did_it_work(inputs)
	if (locale === "tr") return tr_me_did_it_work(inputs)
	if (locale === "zh") return zh_me_did_it_work(inputs)
	if (locale === "ja") return ja_me_did_it_work(inputs)
	return en_me_did_it_work(inputs)
});
