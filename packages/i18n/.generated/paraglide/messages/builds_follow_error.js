/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Follow_ErrorInputs */

const en_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t update your follow status. Check your connection and try again.`)
};

const es_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar el seguimiento. Revisa tu conexión y vuelve a intentarlo.`)
};

const de_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Folgen konnte nicht aktualisiert werden. Prüfe deine Verbindung und versuche es erneut.`)
};

const fr_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour le suivi. Vérifiez votre connexion et réessayez.`)
};

const it_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare lo stato di “segui”. Controlla la connessione e riprova.`)
};

const nl_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgstatus kon niet worden bijgewerkt. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować obserwowania. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar o acompanhamento. Verifique sua conexão e tente de novo.`)
};

const ru_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить подписку. Проверьте подключение и попробуйте ещё раз.`)
};

const sv_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera följandet. Kontrollera anslutningen och försök igen.`)
};

const tr_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip durumun güncellenemedi. Bağlantını kontrol edip tekrar dene.`)
};

const zh_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新关注状态。请检查网络连接后重试。`)
};

const ja_builds_follow_error = /** @type {(inputs: Builds_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー状態を更新できませんでした。接続を確認してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t update your follow status. Check your connection and try again." |
*
* @param {Builds_Follow_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_follow_error = /** @type {((inputs?: Builds_Follow_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Follow_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_follow_error(inputs)
	if (locale === "de") return de_builds_follow_error(inputs)
	if (locale === "fr") return fr_builds_follow_error(inputs)
	if (locale === "it") return it_builds_follow_error(inputs)
	if (locale === "nl") return nl_builds_follow_error(inputs)
	if (locale === "pl") return pl_builds_follow_error(inputs)
	if (locale === "pt") return pt_builds_follow_error(inputs)
	if (locale === "ru") return ru_builds_follow_error(inputs)
	if (locale === "sv") return sv_builds_follow_error(inputs)
	if (locale === "tr") return tr_builds_follow_error(inputs)
	if (locale === "zh") return zh_builds_follow_error(inputs)
	if (locale === "ja") return ja_builds_follow_error(inputs)
	return en_builds_follow_error(inputs)
});
