/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Follow_FailedInputs */

const en_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your follow could not be updated. Try again.`)
};

const es_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar tu seguimiento. Inténtalo de nuevo.`)
};

const de_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Follow konnte nicht aktualisiert werden. Versuche es erneut.`)
};

const fr_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour votre suivi. Réessayez.`)
};

const it_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare il tuo follow. Riprova.`)
};

const nl_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgstatus kon niet worden bijgewerkt. Probeer het opnieuw.`)
};

const pl_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować obserwowania. Spróbuj ponownie.`)
};

const pt_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar o seu seguimento. Tente novamente.`)
};

const ru_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить подписку. Попробуйте ещё раз.`)
};

const sv_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera din följning. Försök igen.`)
};

const tr_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takibin güncellenemedi. Tekrar dene.`)
};

const zh_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新关注状态，请重试。`)
};

const ja_kitsocial_follow_failed = /** @type {(inputs: Kitsocial_Follow_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローを更新できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Your follow could not be updated. Try again." |
*
* @param {Kitsocial_Follow_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_follow_failed = /** @type {((inputs?: Kitsocial_Follow_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Follow_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_follow_failed(inputs)
	if (locale === "de") return de_kitsocial_follow_failed(inputs)
	if (locale === "fr") return fr_kitsocial_follow_failed(inputs)
	if (locale === "it") return it_kitsocial_follow_failed(inputs)
	if (locale === "nl") return nl_kitsocial_follow_failed(inputs)
	if (locale === "pl") return pl_kitsocial_follow_failed(inputs)
	if (locale === "pt") return pt_kitsocial_follow_failed(inputs)
	if (locale === "ru") return ru_kitsocial_follow_failed(inputs)
	if (locale === "sv") return sv_kitsocial_follow_failed(inputs)
	if (locale === "tr") return tr_kitsocial_follow_failed(inputs)
	if (locale === "zh") return zh_kitsocial_follow_failed(inputs)
	if (locale === "ja") return ja_kitsocial_follow_failed(inputs)
	return en_kitsocial_follow_failed(inputs)
});
