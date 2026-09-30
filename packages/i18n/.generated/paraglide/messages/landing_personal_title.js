/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_TitleInputs */

const en_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your updates`)
};

const es_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus actualizaciones`)
};

const de_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Updates`)
};

const fr_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mises à jour`)
};

const it_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi aggiornamenti`)
};

const nl_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw updates`)
};

const pl_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje aktualizacje`)
};

const pt_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas atualizações`)
};

const ru_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши обновления`)
};

const sv_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina uppdateringar`)
};

const tr_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemelerin`)
};

const zh_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的更新`)
};

const ja_landing_personal_title = /** @type {(inputs: Landing_Personal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのアップデート`)
};

/**
* | output |
* | --- |
* | "Your updates" |
*
* @param {Landing_Personal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_title = /** @type {((inputs?: Landing_Personal_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_title(inputs)
	if (locale === "de") return de_landing_personal_title(inputs)
	if (locale === "fr") return fr_landing_personal_title(inputs)
	if (locale === "it") return it_landing_personal_title(inputs)
	if (locale === "nl") return nl_landing_personal_title(inputs)
	if (locale === "pl") return pl_landing_personal_title(inputs)
	if (locale === "pt") return pt_landing_personal_title(inputs)
	if (locale === "ru") return ru_landing_personal_title(inputs)
	if (locale === "sv") return sv_landing_personal_title(inputs)
	if (locale === "tr") return tr_landing_personal_title(inputs)
	if (locale === "zh") return zh_landing_personal_title(inputs)
	if (locale === "ja") return ja_landing_personal_title(inputs)
	return en_landing_personal_title(inputs)
});
