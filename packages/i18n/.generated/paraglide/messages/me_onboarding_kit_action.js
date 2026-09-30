/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Kit_ActionInputs */

const en_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a kit`)
};

const es_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear un kit`)
};

const de_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit erstellen`)
};

const fr_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un kit`)
};

const it_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit`)
};

const nl_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit maken`)
};

const pl_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz zestaw`)
};

const pt_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar um kit`)
};

const ru_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать набор`)
};

const sv_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett kit`)
};

const tr_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit oluştur`)
};

const zh_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建套装`)
};

const ja_me_onboarding_kit_action = /** @type {(inputs: Me_Onboarding_Kit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成`)
};

/**
* | output |
* | --- |
* | "Create a kit" |
*
* @param {Me_Onboarding_Kit_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_kit_action = /** @type {((inputs?: Me_Onboarding_Kit_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Kit_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_kit_action(inputs)
	if (locale === "de") return de_me_onboarding_kit_action(inputs)
	if (locale === "fr") return fr_me_onboarding_kit_action(inputs)
	if (locale === "it") return it_me_onboarding_kit_action(inputs)
	if (locale === "nl") return nl_me_onboarding_kit_action(inputs)
	if (locale === "pl") return pl_me_onboarding_kit_action(inputs)
	if (locale === "pt") return pt_me_onboarding_kit_action(inputs)
	if (locale === "ru") return ru_me_onboarding_kit_action(inputs)
	if (locale === "sv") return sv_me_onboarding_kit_action(inputs)
	if (locale === "tr") return tr_me_onboarding_kit_action(inputs)
	if (locale === "zh") return zh_me_onboarding_kit_action(inputs)
	if (locale === "ja") return ja_me_onboarding_kit_action(inputs)
	return en_me_onboarding_kit_action(inputs)
});
