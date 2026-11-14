/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Link_Copy_FailedInputs */

const en_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't copy the link`)
};

const es_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo copiar el enlace`)
};

const de_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link konnte nicht kopiert werden`)
};

const fr_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de copier le lien`)
};

const it_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare il link`)
};

const nl_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de link niet kopiëren`)
};

const pl_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować linku`)
};

const pt_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar o link`)
};

const ru_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать ссылку`)
};

const sv_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att kopiera länken`)
};

const tr_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kopyalanamadı`)
};

const zh_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法复制链接`)
};

const ja_modpacks_link_copy_failed = /** @type {(inputs: Modpacks_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピーできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't copy the link" |
*
* @param {Modpacks_Link_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_link_copy_failed = /** @type {((inputs?: Modpacks_Link_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Link_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_link_copy_failed(inputs)
	if (locale === "de") return de_modpacks_link_copy_failed(inputs)
	if (locale === "fr") return fr_modpacks_link_copy_failed(inputs)
	if (locale === "it") return it_modpacks_link_copy_failed(inputs)
	if (locale === "nl") return nl_modpacks_link_copy_failed(inputs)
	if (locale === "pl") return pl_modpacks_link_copy_failed(inputs)
	if (locale === "pt") return pt_modpacks_link_copy_failed(inputs)
	if (locale === "ru") return ru_modpacks_link_copy_failed(inputs)
	if (locale === "sv") return sv_modpacks_link_copy_failed(inputs)
	if (locale === "tr") return tr_modpacks_link_copy_failed(inputs)
	if (locale === "zh") return zh_modpacks_link_copy_failed(inputs)
	if (locale === "ja") return ja_modpacks_link_copy_failed(inputs)
	return en_modpacks_link_copy_failed(inputs)
});
