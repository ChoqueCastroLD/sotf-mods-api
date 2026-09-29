/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Reauth_Required_DetailInputs */

const en_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This action needs a recent sign-in. Sign in again and then repeat it.`)
};

const es_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta acción necesita un inicio de sesión reciente. Vuelve a iniciar sesión y repítela.`)
};

const de_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für diese Aktion brauchst du eine frische Anmeldung. Melde dich erneut an und wiederhole sie.`)
};

const fr_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette action demande une connexion récente. Reconnectez-vous puis recommencez.`)
};

const it_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa azione richiede un accesso recente. Accedi di nuovo e poi ripetila.`)
};

const nl_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor deze actie moet je recent zijn ingelogd. Log opnieuw in en herhaal de actie.`)
};

const pl_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta akcja wymaga niedawnego logowania. Zaloguj się ponownie i powtórz ją.`)
};

const pt_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta ação exige um login recente. Entre de novo e repita a ação.`)
};

const ru_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этого действия нужен недавний вход. Войдите снова и повторите его.`)
};

const sv_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här åtgärden kräver en färsk inloggning. Logga in igen och gör om den.`)
};

const tr_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu işlem için yakın zamanda giriş yapmış olman gerekiyor. Tekrar giriş yap ve işlemi yinele.`)
};

const zh_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此操作需要最近登录过。请重新登录后再试一次。`)
};

const ja_errors_code_reauth_required_detail = /** @type {(inputs: Errors_Code_Reauth_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この操作には最近のログインが必要です。もう一度ログインしてから操作をやり直してください。`)
};

/**
* | output |
* | --- |
* | "This action needs a recent sign-in. Sign in again and then repeat it." |
*
* @param {Errors_Code_Reauth_Required_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_reauth_required_detail = /** @type {((inputs?: Errors_Code_Reauth_Required_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Reauth_Required_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_reauth_required_detail(inputs)
	if (locale === "de") return de_errors_code_reauth_required_detail(inputs)
	if (locale === "fr") return fr_errors_code_reauth_required_detail(inputs)
	if (locale === "it") return it_errors_code_reauth_required_detail(inputs)
	if (locale === "nl") return nl_errors_code_reauth_required_detail(inputs)
	if (locale === "pl") return pl_errors_code_reauth_required_detail(inputs)
	if (locale === "pt") return pt_errors_code_reauth_required_detail(inputs)
	if (locale === "ru") return ru_errors_code_reauth_required_detail(inputs)
	if (locale === "sv") return sv_errors_code_reauth_required_detail(inputs)
	if (locale === "tr") return tr_errors_code_reauth_required_detail(inputs)
	if (locale === "zh") return zh_errors_code_reauth_required_detail(inputs)
	if (locale === "ja") return ja_errors_code_reauth_required_detail(inputs)
	return en_errors_code_reauth_required_detail(inputs)
});
