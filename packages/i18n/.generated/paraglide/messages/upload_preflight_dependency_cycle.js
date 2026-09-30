/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Dependency_CycleInputs */

const en_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies form a loop.`)
};

const es_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las dependencias forman un ciclo.`)
};

const de_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Abhängigkeiten bilden eine Schleife.`)
};

const fr_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les dépendances forment une boucle.`)
};

const it_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le dipendenze formano un ciclo.`)
};

const nl_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afhankelijkheden vormen een lus.`)
};

const pl_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności tworzą pętlę.`)
};

const pt_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As dependências formam um ciclo.`)
};

const ru_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости образуют цикл.`)
};

const sv_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroendena bildar en slinga.`)
};

const tr_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar bir döngü oluşturuyor.`)
};

const zh_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖之间形成了循环。`)
};

const ja_upload_preflight_dependency_cycle = /** @type {(inputs: Upload_Preflight_Dependency_CycleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係が循環しています。`)
};

/**
* | output |
* | --- |
* | "Dependencies form a loop." |
*
* @param {Upload_Preflight_Dependency_CycleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_dependency_cycle = /** @type {((inputs?: Upload_Preflight_Dependency_CycleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Dependency_CycleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_dependency_cycle(inputs)
	if (locale === "de") return de_upload_preflight_dependency_cycle(inputs)
	if (locale === "fr") return fr_upload_preflight_dependency_cycle(inputs)
	if (locale === "it") return it_upload_preflight_dependency_cycle(inputs)
	if (locale === "nl") return nl_upload_preflight_dependency_cycle(inputs)
	if (locale === "pl") return pl_upload_preflight_dependency_cycle(inputs)
	if (locale === "pt") return pt_upload_preflight_dependency_cycle(inputs)
	if (locale === "ru") return ru_upload_preflight_dependency_cycle(inputs)
	if (locale === "sv") return sv_upload_preflight_dependency_cycle(inputs)
	if (locale === "tr") return tr_upload_preflight_dependency_cycle(inputs)
	if (locale === "zh") return zh_upload_preflight_dependency_cycle(inputs)
	if (locale === "ja") return ja_upload_preflight_dependency_cycle(inputs)
	return en_upload_preflight_dependency_cycle(inputs)
});
