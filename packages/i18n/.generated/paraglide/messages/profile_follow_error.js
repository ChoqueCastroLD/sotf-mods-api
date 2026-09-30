/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Follow_ErrorInputs */

const en_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t update the follow. Check your connection and try again.`)
};

const es_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar el seguimiento. Revisa tu conexión y vuelve a intentarlo.`)
};

const de_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Folgen konnte nicht aktualisiert werden. Prüfe deine Verbindung und versuche es erneut.`)
};

const fr_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour l’abonnement. Vérifiez votre connexion et réessayez.`)
};

const it_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare il follow. Controlla la connessione e riprova.`)
};

const nl_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgen kon niet worden bijgewerkt. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować obserwowania. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar o seguimento. Verifique sua conexão e tente de novo.`)
};

const ru_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить подписку. Проверьте соединение и попробуйте снова.`)
};

const sv_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera följningen. Kontrollera anslutningen och försök igen.`)
};

const tr_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip güncellenemedi. Bağlantını kontrol edip tekrar dene.`)
};

const zh_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新关注状态。请检查网络连接后重试。`)
};

const ja_profile_follow_error = /** @type {(inputs: Profile_Follow_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローを更新できませんでした。接続を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t update the follow. Check your connection and try again." |
*
* @param {Profile_Follow_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_follow_error = /** @type {((inputs?: Profile_Follow_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Follow_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_follow_error(inputs)
	if (locale === "de") return de_profile_follow_error(inputs)
	if (locale === "fr") return fr_profile_follow_error(inputs)
	if (locale === "it") return it_profile_follow_error(inputs)
	if (locale === "nl") return nl_profile_follow_error(inputs)
	if (locale === "pl") return pl_profile_follow_error(inputs)
	if (locale === "pt") return pt_profile_follow_error(inputs)
	if (locale === "ru") return ru_profile_follow_error(inputs)
	if (locale === "sv") return sv_profile_follow_error(inputs)
	if (locale === "tr") return tr_profile_follow_error(inputs)
	if (locale === "zh") return zh_profile_follow_error(inputs)
	if (locale === "ja") return ja_profile_follow_error(inputs)
	return en_profile_follow_error(inputs)
});
