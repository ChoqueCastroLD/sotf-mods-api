/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Queued_VersionInputs */

const en_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The new version of ${i?.name} is waiting for a ranger. You’ll get a signal when it’s live.`)
};

const es_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nueva versión de ${i?.name} espera a un guardabosques. Recibirás una señal cuando esté publicada.`)
};

const de_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die neue Version von ${i?.name} wartet auf einen Ranger. Du bekommst ein Signal, wenn sie online ist.`)
};

const fr_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nouvelle version de ${i?.name} attend un ranger. Vous recevrez un signal quand elle sera en ligne.`)
};

const it_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La nuova versione di ${i?.name} aspetta un ranger. Riceverai un segnale quando sarà online.`)
};

const nl_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De nieuwe versie van ${i?.name} wacht op een ranger. Je krijgt een signaal als hij live is.`)
};

const pl_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa wersja ${i?.name} czeka na strażnika. Dostaniesz sygnał, gdy zostanie opublikowana.`)
};

const pt_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A nova versão de ${i?.name} aguarda um guarda. Você receberá um sinal quando for publicada.`)
};

const ru_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая версия «${i?.name}» ждёт рейнджера. Вы получите сигнал, когда она выйдет.`)
};

const sv_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den nya versionen av ${i?.name} väntar på en ranger. Du får en signal när den är publicerad.`)
};

const tr_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni sürüm bir korucuyu bekliyor. Yayına girince sinyal alacaksın.`)
};

const zh_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新版本正在等待护林员审核。上线后你会收到信号。`)
};

const ja_upload_success_queued_version = /** @type {(inputs: Upload_Success_Queued_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいバージョンはレンジャーの確認待ちです。公開されたらシグナルでお知らせします。`)
};

/**
* | output |
* | --- |
* | "The new version of {name} is waiting for a ranger. You’ll get a signal when it’s live." |
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
