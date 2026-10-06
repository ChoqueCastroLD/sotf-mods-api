/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Turnstile_Required_DetailInputs */

const en_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete the security check to confirm you’re not a bot, then try again.`)
};

const es_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la verificación de seguridad para confirmar que no eres un bot y vuelve a intentarlo.`)
};

const de_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließe die Sicherheitsprüfung ab, um zu bestätigen, dass du kein Bot bist, und versuch es erneut.`)
};

const fr_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminez la vérification de sécurité pour confirmer que vous n’êtes pas un robot, puis réessayez.`)
};

const it_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la verifica di sicurezza per confermare che non sei un bot, poi riprova.`)
};

const nl_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltooi de beveiligingscontrole om te bevestigen dat je geen bot bent en probeer het opnieuw.`)
};

const pl_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź weryfikację bezpieczeństwa, aby potwierdzić, że nie jesteś botem, i spróbuj ponownie.`)
};

const pt_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conclua a verificação de segurança para confirmar que você não é um bot e tente de novo.`)
};

const ru_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пройдите проверку безопасности, чтобы подтвердить, что вы не бот, и попробуйте снова.`)
};

const sv_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutför säkerhetskontrollen för att bekräfta att du inte är en bot och försök igen.`)
};

const tr_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot olmadığını doğrulamak için güvenlik kontrolünü tamamla ve tekrar dene.`)
};

const zh_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请完成安全验证，确认你不是机器人，然后重试。`)
};

const ja_errors_code_turnstile_required_detail = /** @type {(inputs: Errors_Code_Turnstile_Required_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティチェックを完了してボットでないことを確認し、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Complete the security check to confirm you’re not a bot, then try again." |
*
* @param {Errors_Code_Turnstile_Required_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_turnstile_required_detail = /** @type {((inputs?: Errors_Code_Turnstile_Required_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Turnstile_Required_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_turnstile_required_detail(inputs)
	if (locale === "de") return de_errors_code_turnstile_required_detail(inputs)
	if (locale === "fr") return fr_errors_code_turnstile_required_detail(inputs)
	if (locale === "it") return it_errors_code_turnstile_required_detail(inputs)
	if (locale === "nl") return nl_errors_code_turnstile_required_detail(inputs)
	if (locale === "pl") return pl_errors_code_turnstile_required_detail(inputs)
	if (locale === "pt") return pt_errors_code_turnstile_required_detail(inputs)
	if (locale === "ru") return ru_errors_code_turnstile_required_detail(inputs)
	if (locale === "sv") return sv_errors_code_turnstile_required_detail(inputs)
	if (locale === "tr") return tr_errors_code_turnstile_required_detail(inputs)
	if (locale === "zh") return zh_errors_code_turnstile_required_detail(inputs)
	if (locale === "ja") return ja_errors_code_turnstile_required_detail(inputs)
	return en_errors_code_turnstile_required_detail(inputs)
});
