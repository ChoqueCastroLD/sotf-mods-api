/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Revoke_Sessions_TextInputs */

const en_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every session of this account ends now. They can sign in again unless they are suspended or banned.`)
};

const es_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las sesiones de esta cuenta terminan ahora. Podrá volver a entrar salvo que esté suspendida o baneada.`)
};

const de_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Sitzungen dieses Kontos enden jetzt. Eine erneute Anmeldung ist möglich, außer bei Suspendierung oder Sperre.`)
};

const fr_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les sessions de ce compte prennent fin maintenant. La personne peut se reconnecter, sauf si elle est suspendue ou bannie.`)
};

const it_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le sessioni di questo account terminano ora. Potrà accedere di nuovo, a meno che non sia sospeso o bannato.`)
};

const nl_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle sessies van dit account eindigen nu. Opnieuw aanmelden kan, tenzij het account geschorst of verbannen is.`)
};

const pl_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie sesje tego konta kończą się teraz. Ponowne logowanie jest możliwe, chyba że konto jest zawieszone lub zbanowane.`)
};

const pt_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as sessões desta conta terminam agora. A pessoa pode entrar de novo, a menos que esteja suspensa ou banida.`)
};

const ru_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все сеансы этого аккаунта завершатся сейчас. Войти снова можно, если аккаунт не приостановлен и не заблокирован.`)
};

const sv_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla sessioner för kontot avslutas nu. Personen kan logga in igen om kontot inte är avstängt eller bannlyst.`)
};

const tr_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hesabın tüm oturumları şimdi sona erer. Askıya alınmadıysa veya yasaklanmadıysa yeniden giriş yapabilir.`)
};

const zh_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该账号的所有会话将立即结束。除非账号被停用或封禁，否则可以重新登录。`)
};

const ja_ranger_user_revoke_sessions_text = /** @type {(inputs: Ranger_User_Revoke_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントのすべてのセッションが今すぐ終了します。停止中や BAN でなければ再ログインできます。`)
};

/**
* | output |
* | --- |
* | "Every session of this account ends now. They can sign in again unless they are suspended or banned." |
*
* @param {Ranger_User_Revoke_Sessions_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_revoke_sessions_text = /** @type {((inputs?: Ranger_User_Revoke_Sessions_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Revoke_Sessions_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_revoke_sessions_text(inputs)
	if (locale === "de") return de_ranger_user_revoke_sessions_text(inputs)
	if (locale === "fr") return fr_ranger_user_revoke_sessions_text(inputs)
	if (locale === "it") return it_ranger_user_revoke_sessions_text(inputs)
	if (locale === "nl") return nl_ranger_user_revoke_sessions_text(inputs)
	if (locale === "pl") return pl_ranger_user_revoke_sessions_text(inputs)
	if (locale === "pt") return pt_ranger_user_revoke_sessions_text(inputs)
	if (locale === "ru") return ru_ranger_user_revoke_sessions_text(inputs)
	if (locale === "sv") return sv_ranger_user_revoke_sessions_text(inputs)
	if (locale === "tr") return tr_ranger_user_revoke_sessions_text(inputs)
	if (locale === "zh") return zh_ranger_user_revoke_sessions_text(inputs)
	if (locale === "ja") return ja_ranger_user_revoke_sessions_text(inputs)
	return en_ranger_user_revoke_sessions_text(inputs)
});
