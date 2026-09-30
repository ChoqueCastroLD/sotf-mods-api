/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_FailedInputs */

const en_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not update the translation. Try again.`)
};

const es_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar la traducción. Inténtalo de nuevo.`)
};

const de_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Übersetzung konnte nicht aktualisiert werden. Versuche es erneut.`)
};

const fr_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour la traduction. Réessayez.`)
};

const it_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare la traduzione. Riprova.`)
};

const nl_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De vertaling kon niet worden bijgewerkt. Probeer het opnieuw.`)
};

const pl_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować tłumaczenia. Spróbuj ponownie.`)
};

const pt_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a tradução. Tente novamente.`)
};

const ru_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить перевод. Попробуйте ещё раз.`)
};

const sv_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera översättningen. Försök igen.`)
};

const tr_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviri güncellenemedi. Tekrar dene.`)
};

const zh_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新译文，请重试。`)
};

const ja_translations_failed = /** @type {(inputs: Translations_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を更新できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Could not update the translation. Try again." |
*
* @param {Translations_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_failed = /** @type {((inputs?: Translations_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_failed(inputs)
	if (locale === "de") return de_translations_failed(inputs)
	if (locale === "fr") return fr_translations_failed(inputs)
	if (locale === "it") return it_translations_failed(inputs)
	if (locale === "nl") return nl_translations_failed(inputs)
	if (locale === "pl") return pl_translations_failed(inputs)
	if (locale === "pt") return pt_translations_failed(inputs)
	if (locale === "ru") return ru_translations_failed(inputs)
	if (locale === "sv") return sv_translations_failed(inputs)
	if (locale === "tr") return tr_translations_failed(inputs)
	if (locale === "zh") return zh_translations_failed(inputs)
	if (locale === "ja") return ja_translations_failed(inputs)
	return en_translations_failed(inputs)
});
