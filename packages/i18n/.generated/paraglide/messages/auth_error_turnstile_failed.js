/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Turnstile_FailedInputs */

const en_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The security check didn’t finish. Check your connection or allow challenges.cloudflare.com in your blocker, then try again.`)
};

const es_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La comprobación de seguridad no terminó. Revisa tu conexión o permite challenges.cloudflare.com en tu bloqueador y vuelve a intentarlo.`)
};

const de_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sicherheitsprüfung wurde nicht abgeschlossen. Prüfe deine Verbindung oder erlaube challenges.cloudflare.com in deinem Blocker und versuch es erneut.`)
};

const fr_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vérification de sécurité n’a pas abouti. Vérifiez votre connexion ou autorisez challenges.cloudflare.com dans votre bloqueur, puis réessayez.`)
};

const it_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il controllo di sicurezza non è stato completato. Controlla la connessione o consenti challenges.cloudflare.com nel tuo blocker, poi riprova.`)
};

const nl_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beveiligingscheck is niet afgerond. Controleer je verbinding of sta challenges.cloudflare.com toe in je blocker en probeer het opnieuw.`)
};

const pl_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrola bezpieczeństwa się nie zakończyła. Sprawdź połączenie lub zezwól na challenges.cloudflare.com w blokerze i spróbuj ponownie.`)
};

const pt_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação de segurança não terminou. Verifique sua conexão ou permita challenges.cloudflare.com no seu bloqueador e tente de novo.`)
};

const ru_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка безопасности не завершилась. Проверьте подключение или разрешите challenges.cloudflare.com в блокировщике и попробуйте снова.`)
};

const sv_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetskontrollen blev inte klar. Kontrollera anslutningen eller tillåt challenges.cloudflare.com i din blockerare och försök igen.`)
};

const tr_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik kontrolü tamamlanmadı. Bağlantını kontrol et veya engelleyicinde challenges.cloudflare.com’a izin verip tekrar dene.`)
};

const zh_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全验证未完成。请检查网络连接，或在拦截插件中允许 challenges.cloudflare.com，然后重试。`)
};

const ja_auth_error_turnstile_failed = /** @type {(inputs: Auth_Error_Turnstile_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティチェックが完了しませんでした。接続を確認するか、ブロッカーで challenges.cloudflare.com を許可してから、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The security check didn’t finish. Check your connection or allow challenges.cloudflare.com in your blocker, then try again." |
*
* @param {Auth_Error_Turnstile_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_turnstile_failed = /** @type {((inputs?: Auth_Error_Turnstile_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Turnstile_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_turnstile_failed(inputs)
	if (locale === "de") return de_auth_error_turnstile_failed(inputs)
	if (locale === "fr") return fr_auth_error_turnstile_failed(inputs)
	if (locale === "it") return it_auth_error_turnstile_failed(inputs)
	if (locale === "nl") return nl_auth_error_turnstile_failed(inputs)
	if (locale === "pl") return pl_auth_error_turnstile_failed(inputs)
	if (locale === "pt") return pt_auth_error_turnstile_failed(inputs)
	if (locale === "ru") return ru_auth_error_turnstile_failed(inputs)
	if (locale === "sv") return sv_auth_error_turnstile_failed(inputs)
	if (locale === "tr") return tr_auth_error_turnstile_failed(inputs)
	if (locale === "zh") return zh_auth_error_turnstile_failed(inputs)
	if (locale === "ja") return ja_auth_error_turnstile_failed(inputs)
	return en_auth_error_turnstile_failed(inputs)
});
