/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_More_TitleInputs */

const en_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The rest of the app`)
};

const es_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El resto de la app`)
};

const de_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Rest der App`)
};

const fr_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le reste de l’application`)
};

const it_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il resto dell’app`)
};

const nl_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rest van de app`)
};

const pl_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reszta aplikacji`)
};

const pt_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O resto do app`)
};

const ru_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Остальное в приложении`)
};

const sv_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resten av appen`)
};

const tr_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamanın geri kalanı`)
};

const zh_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用的其他功能`)
};

const ja_manager_more_title = /** @type {(inputs: Manager_More_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の機能`)
};

/**
* | output |
* | --- |
* | "The rest of the app" |
*
* @param {Manager_More_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_more_title = /** @type {((inputs?: Manager_More_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_More_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_more_title(inputs)
	if (locale === "de") return de_manager_more_title(inputs)
	if (locale === "fr") return fr_manager_more_title(inputs)
	if (locale === "it") return it_manager_more_title(inputs)
	if (locale === "nl") return nl_manager_more_title(inputs)
	if (locale === "pl") return pl_manager_more_title(inputs)
	if (locale === "pt") return pt_manager_more_title(inputs)
	if (locale === "ru") return ru_manager_more_title(inputs)
	if (locale === "sv") return sv_manager_more_title(inputs)
	if (locale === "tr") return tr_manager_more_title(inputs)
	if (locale === "zh") return zh_manager_more_title(inputs)
	if (locale === "ja") return ja_manager_more_title(inputs)
	return en_manager_more_title(inputs)
});
