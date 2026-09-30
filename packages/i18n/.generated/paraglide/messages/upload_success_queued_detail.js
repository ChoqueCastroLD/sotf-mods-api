/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Queued_DetailInputs */

const en_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is in the review queue. You’ll get a signal as soon as a ranger decides.`)
};

const es_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está en la cola de revisión. Recibirás una señal en cuanto un guardabosques decida.`)
};

const de_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist in der Prüfwarteschlange. Du bekommst ein Signal, sobald ein Ranger entscheidet.`)
};

const fr_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est dans la file d’examen. Vous recevrez un signal dès qu’un ranger aura décidé.`)
};

const it_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} è in coda di revisione. Riceverai un segnale appena un ranger decide.`)
};

const nl_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} staat in de wachtrij. Je krijgt een signaal zodra een ranger beslist.`)
};

const pl_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} czeka w kolejce do przeglądu. Dostaniesz sygnał, gdy strażnik podejmie decyzję.`)
};

const pt_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está na fila de revisão. Você receberá um sinal assim que um guarda decidir.`)
};

const ru_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» в очереди на проверку. Вы получите сигнал, как только рейнджер примет решение.`)
};

const sv_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} står i granskningskön. Du får en signal så snart en ranger har bestämt sig.`)
};

const tr_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} inceleme sırasında. Bir korucu karar verir vermez sinyal alacaksın.`)
};

const zh_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已进入审核队列。护林员做出决定后你会收到信号。`)
};

const ja_upload_success_queued_detail = /** @type {(inputs: Upload_Success_Queued_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は確認待ちの列に入りました。レンジャーが判断したらシグナルでお知らせします。`)
};

/**
* | output |
* | --- |
* | "{name} is in the review queue. You’ll get a signal as soon as a ranger decides." |
*
* @param {Upload_Success_Queued_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_queued_detail = /** @type {((inputs: Upload_Success_Queued_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Queued_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_queued_detail(inputs)
	if (locale === "de") return de_upload_success_queued_detail(inputs)
	if (locale === "fr") return fr_upload_success_queued_detail(inputs)
	if (locale === "it") return it_upload_success_queued_detail(inputs)
	if (locale === "nl") return nl_upload_success_queued_detail(inputs)
	if (locale === "pl") return pl_upload_success_queued_detail(inputs)
	if (locale === "pt") return pt_upload_success_queued_detail(inputs)
	if (locale === "ru") return ru_upload_success_queued_detail(inputs)
	if (locale === "sv") return sv_upload_success_queued_detail(inputs)
	if (locale === "tr") return tr_upload_success_queued_detail(inputs)
	if (locale === "zh") return zh_upload_success_queued_detail(inputs)
	if (locale === "ja") return ja_upload_success_queued_detail(inputs)
	return en_upload_success_queued_detail(inputs)
});
