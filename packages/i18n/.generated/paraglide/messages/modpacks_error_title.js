/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Error_TitleInputs */

const en_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load the modpacks`)
};

const es_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar los modpacks`)
};

const de_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks konnten nicht geladen werden`)
};

const fr_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les modpacks`)
};

const it_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i modpack`)
};

const nl_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de modpacks niet laden`)
};

const pl_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać modpacków`)
};

const pt_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os modpacks`)
};

const ru_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить модпаки`)
};

const sv_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att läsa in modpaketen`)
};

const tr_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri yüklenemedi`)
};

const zh_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载整合包`)
};

const ja_modpacks_error_title = /** @type {(inputs: Modpacks_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't load the modpacks" |
*
* @param {Modpacks_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_error_title = /** @type {((inputs?: Modpacks_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_error_title(inputs)
	if (locale === "de") return de_modpacks_error_title(inputs)
	if (locale === "fr") return fr_modpacks_error_title(inputs)
	if (locale === "it") return it_modpacks_error_title(inputs)
	if (locale === "nl") return nl_modpacks_error_title(inputs)
	if (locale === "pl") return pl_modpacks_error_title(inputs)
	if (locale === "pt") return pt_modpacks_error_title(inputs)
	if (locale === "ru") return ru_modpacks_error_title(inputs)
	if (locale === "sv") return sv_modpacks_error_title(inputs)
	if (locale === "tr") return tr_modpacks_error_title(inputs)
	if (locale === "zh") return zh_modpacks_error_title(inputs)
	if (locale === "ja") return ja_modpacks_error_title(inputs)
	return en_modpacks_error_title(inputs)
});
