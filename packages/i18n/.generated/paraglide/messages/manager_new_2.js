/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_New_2Inputs */

const en_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies come along on their own`)
};

const es_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las dependencias se instalan solas`)
};

const de_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten kommen von selbst mit`)
};

const fr_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les dépendances suivent toutes seules`)
};

const it_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le dipendenze arrivano da sole`)
};

const nl_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden komen vanzelf mee`)
};

const pl_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności instalują się same`)
};

const pt_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As dependências vêm sozinhas`)
};

const ru_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости ставятся сами`)
};

const sv_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden följer med av sig själva`)
};

const tr_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar kendiliğinden gelir`)
};

const zh_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖会自动安装`)
};

const ja_manager_new_2 = /** @type {(inputs: Manager_New_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係は自動で入る`)
};

/**
* | output |
* | --- |
* | "Dependencies come along on their own" |
*
* @param {Manager_New_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_new_2 = /** @type {((inputs?: Manager_New_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_New_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_new_2(inputs)
	if (locale === "de") return de_manager_new_2(inputs)
	if (locale === "fr") return fr_manager_new_2(inputs)
	if (locale === "it") return it_manager_new_2(inputs)
	if (locale === "nl") return nl_manager_new_2(inputs)
	if (locale === "pl") return pl_manager_new_2(inputs)
	if (locale === "pt") return pt_manager_new_2(inputs)
	if (locale === "ru") return ru_manager_new_2(inputs)
	if (locale === "sv") return sv_manager_new_2(inputs)
	if (locale === "tr") return tr_manager_new_2(inputs)
	if (locale === "zh") return zh_manager_new_2(inputs)
	if (locale === "ja") return ja_manager_new_2(inputs)
	return en_manager_new_2(inputs)
});
