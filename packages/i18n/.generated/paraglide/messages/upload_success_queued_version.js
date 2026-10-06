/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Queued_VersionInputs */

const en_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The new version of ${i?.name} is waiting for a moderator. You’ll get a notification when it’s live.`)
};

const es_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nueva versión de ${i?.name} espera a un moderador. Recibirás una notificación cuando esté publicada.`)
};

const de_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die neue Version von ${i?.name} wartet auf einen Moderator. Du wirst benachrichtigt, wenn sie online ist.`)
};

const fr_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nouvelle version de ${i?.name} attend un modérateur. Vous serez notifié quand elle sera en ligne.`)
};

const it_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nuova versione di ${i?.name} aspetta un moderatore. Riceverai una notifica quando sarà online.`)
};

const nl_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De nieuwe versie van ${i?.name} wacht op een moderator. Je krijgt een melding als hij live is.`)
};

const pl_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa wersja ${i?.name} czeka na moderatora. Dostaniesz powiadomienie, gdy zostanie opublikowana.`)
};

const pt_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A nova versão de ${i?.name} aguarda um moderador. Você receberá uma notificação quando for publicada.`)
};

const ru_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая версия «${i?.name}» ждёт модератора. Вы получите уведомление, когда она выйдет.`)
};

const sv_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den nya versionen av ${i?.name} väntar på en moderator. Du får en avisering när den är publicerad.`)
};

const tr_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni sürüm bir moderatörü bekliyor. Yayına girince bildirim alacaksın.`)
};

const zh_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新版本正在等待版主审核。上线后你会收到通知。`)
};

const ja_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいバージョンはモデレーターの確認待ちです。公開されたら通知でお知らせします。`)
};

/**
* | output |
* | --- |
* | "The new version of {name} is waiting for a moderator. You’ll get a notification when it’s live." |
*
* @param {Upload_Success_Queued_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_queued_version = /** @type {((inputs: Upload_Success_Queued_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Queued_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_queued_version(inputs)
	if (locale === "de") return de_upload_success_queued_version(inputs)
	if (locale === "fr") return fr_upload_success_queued_version(inputs)
	if (locale === "it") return it_upload_success_queued_version(inputs)
	if (locale === "nl") return nl_upload_success_queued_version(inputs)
	if (locale === "pl") return pl_upload_success_queued_version(inputs)
	if (locale === "pt") return pt_upload_success_queued_version(inputs)
	if (locale === "ru") return ru_upload_success_queued_version(inputs)
	if (locale === "sv") return sv_upload_success_queued_version(inputs)
	if (locale === "tr") return tr_upload_success_queued_version(inputs)
	if (locale === "zh") return zh_upload_success_queued_version(inputs)
	if (locale === "ja") return ja_upload_success_queued_version(inputs)
	return en_upload_success_queued_version(inputs)
});
