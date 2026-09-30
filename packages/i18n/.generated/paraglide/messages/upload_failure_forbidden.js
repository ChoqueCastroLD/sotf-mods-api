/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_ForbiddenInputs */

const en_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account can’t upload right now (unverified email or a restriction).`)
};

const es_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta no puede subir ahora mismo (correo sin verificar o una restricción).`)
};

const de_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto kann gerade nichts hochladen (E-Mail unbestätigt oder eine Einschränkung).`)
};

const fr_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte ne peut pas envoyer de fichiers pour le moment (e-mail non vérifié ou restriction).`)
};

const it_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account non può caricare file ora (email non verificata o una restrizione).`)
};

const nl_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account kan nu niet uploaden (onbevestigd e-mailadres of een beperking).`)
};

const pl_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto nie może teraz wysyłać plików (niepotwierdzony e-mail lub ograniczenie).`)
};

const pt_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta não pode enviar agora (e-mail não confirmado ou uma restrição).`)
};

const ru_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт сейчас не может загружать файлы (почта не подтверждена или действует ограничение).`)
};

const sv_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto kan inte ladda upp just nu (obekräftad e-post eller en begränsning).`)
};

const tr_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın şu an yükleme yapamıyor (doğrulanmamış e-posta ya da bir kısıtlama).`)
};

const zh_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号目前无法上传（邮箱未验证或受到限制）。`)
};

const ja_upload_failure_forbidden = /** @type {(inputs: Upload_Failure_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在このアカウントはアップロードできません（メール未確認または制限中）。`)
};

/**
* | output |
* | --- |
* | "Your account can’t upload right now (unverified email or a restriction)." |
*
* @param {Upload_Failure_ForbiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_forbidden = /** @type {((inputs?: Upload_Failure_ForbiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_ForbiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_forbidden(inputs)
	if (locale === "de") return de_upload_failure_forbidden(inputs)
	if (locale === "fr") return fr_upload_failure_forbidden(inputs)
	if (locale === "it") return it_upload_failure_forbidden(inputs)
	if (locale === "nl") return nl_upload_failure_forbidden(inputs)
	if (locale === "pl") return pl_upload_failure_forbidden(inputs)
	if (locale === "pt") return pt_upload_failure_forbidden(inputs)
	if (locale === "ru") return ru_upload_failure_forbidden(inputs)
	if (locale === "sv") return sv_upload_failure_forbidden(inputs)
	if (locale === "tr") return tr_upload_failure_forbidden(inputs)
	if (locale === "zh") return zh_upload_failure_forbidden(inputs)
	if (locale === "ja") return ja_upload_failure_forbidden(inputs)
	return en_upload_failure_forbidden(inputs)
});
