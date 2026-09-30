/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Pin_HintInputs */

const en_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pin a version only when a newer one breaks the kit.`)
};

const es_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fija una versión solo si una más nueva rompe el kit.`)
};

const de_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leg eine Version nur fest, wenn eine neuere das Kit kaputt macht.`)
};

const fr_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N’épinglez une version que si une plus récente casse le kit.`)
};

const it_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fissa una versione solo se una più recente rompe il kit.`)
};

const nl_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet alleen een versie vast als een nieuwere de kit breekt.`)
};

const pl_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypinaj wersję tylko wtedy, gdy nowsza psuje zestaw.`)
};

const pt_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixe uma versão só quando uma mais nova quebrar o kit.`)
};

const ru_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрепляйте версию, только если более новая ломает набор.`)
};

const sv_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lås en version bara om en nyare förstör kitet.`)
};

const tr_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm sabitlemeyi yalnızca daha yeni sürüm kiti bozuyorsa yap.`)
};

const zh_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有当新版本导致套装出问题时才固定版本。`)
};

const ja_kits_pin_hint = /** @type {(inputs: Kits_Pin_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョンで不具合が出るときだけ固定してください。`)
};

/**
* | output |
* | --- |
* | "Pin a version only when a newer one breaks the kit." |
*
* @param {Kits_Pin_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_pin_hint = /** @type {((inputs?: Kits_Pin_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Pin_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_pin_hint(inputs)
	if (locale === "de") return de_kits_pin_hint(inputs)
	if (locale === "fr") return fr_kits_pin_hint(inputs)
	if (locale === "it") return it_kits_pin_hint(inputs)
	if (locale === "nl") return nl_kits_pin_hint(inputs)
	if (locale === "pl") return pl_kits_pin_hint(inputs)
	if (locale === "pt") return pt_kits_pin_hint(inputs)
	if (locale === "ru") return ru_kits_pin_hint(inputs)
	if (locale === "sv") return sv_kits_pin_hint(inputs)
	if (locale === "tr") return tr_kits_pin_hint(inputs)
	if (locale === "zh") return zh_kits_pin_hint(inputs)
	if (locale === "ja") return ja_kits_pin_hint(inputs)
	return en_kits_pin_hint(inputs)
});
