/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_Load_FailedInputs */

const en_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load the modpacks.`)
};

const es_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar los modpacks.`)
};

const de_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks konnten nicht geladen werden.`)
};

const fr_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les modpacks.`)
};

const it_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i modpack.`)
};

const nl_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de modpacks niet laden.`)
};

const pl_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać modpacków.`)
};

const pt_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os modpacks.`)
};

const ru_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить модпаки.`)
};

const sv_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att läsa in modpaketen.`)
};

const tr_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri yüklenemedi.`)
};

const zh_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载整合包。`)
};

const ja_modpacks_review_load_failed = /** @type {(inputs: Modpacks_Review_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn't load the modpacks." |
*
* @param {Modpacks_Review_Load_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_load_failed = /** @type {((inputs?: Modpacks_Review_Load_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Load_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_load_failed(inputs)
	if (locale === "de") return de_modpacks_review_load_failed(inputs)
	if (locale === "fr") return fr_modpacks_review_load_failed(inputs)
	if (locale === "it") return it_modpacks_review_load_failed(inputs)
	if (locale === "nl") return nl_modpacks_review_load_failed(inputs)
	if (locale === "pl") return pl_modpacks_review_load_failed(inputs)
	if (locale === "pt") return pt_modpacks_review_load_failed(inputs)
	if (locale === "ru") return ru_modpacks_review_load_failed(inputs)
	if (locale === "sv") return sv_modpacks_review_load_failed(inputs)
	if (locale === "tr") return tr_modpacks_review_load_failed(inputs)
	if (locale === "zh") return zh_modpacks_review_load_failed(inputs)
	if (locale === "ja") return ja_modpacks_review_load_failed(inputs)
	return en_modpacks_review_load_failed(inputs)
});
