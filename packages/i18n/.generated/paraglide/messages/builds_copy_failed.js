/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Copy_FailedInputs */

const en_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t copy. Select the text and copy it by hand.`)
};

const es_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo copiar. Selecciona el texto y cópialo a mano.`)
};

const de_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren fehlgeschlagen. Markiere den Text und kopiere ihn von Hand.`)
};

const fr_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copie impossible. Sélectionnez le texte et copiez-le à la main.`)
};

const it_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia non riuscita. Seleziona il testo e copialo a mano.`)
};

const nl_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren mislukt. Selecteer de tekst en kopieer hem handmatig.`)
};

const pl_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować. Zaznacz tekst i skopiuj go ręcznie.`)
};

const pt_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar. Selecione o texto e copie manualmente.`)
};

const ru_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать. Выделите текст и скопируйте вручную.`)
};

const sv_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att kopiera. Markera texten och kopiera den för hand.`)
};

const tr_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalanamadı. Metni seçip elle kopyala.`)
};

const zh_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败。请选中文字后手动复制。`)
};

const ja_builds_copy_failed = /** @type {(inputs: Builds_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーできませんでした。テキストを選択して手動でコピーしてください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t copy. Select the text and copy it by hand." |
*
* @param {Builds_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_copy_failed = /** @type {((inputs?: Builds_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_copy_failed(inputs)
	if (locale === "de") return de_builds_copy_failed(inputs)
	if (locale === "fr") return fr_builds_copy_failed(inputs)
	if (locale === "it") return it_builds_copy_failed(inputs)
	if (locale === "nl") return nl_builds_copy_failed(inputs)
	if (locale === "pl") return pl_builds_copy_failed(inputs)
	if (locale === "pt") return pt_builds_copy_failed(inputs)
	if (locale === "ru") return ru_builds_copy_failed(inputs)
	if (locale === "sv") return sv_builds_copy_failed(inputs)
	if (locale === "tr") return tr_builds_copy_failed(inputs)
	if (locale === "zh") return zh_builds_copy_failed(inputs)
	if (locale === "ja") return ja_builds_copy_failed(inputs)
	return en_builds_copy_failed(inputs)
});
